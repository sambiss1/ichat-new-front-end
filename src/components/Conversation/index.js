/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */

import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BiSend } from "react-icons/bi";
import { BsCamera } from "react-icons/bs";
import axios from "axios";

import moment from "moment";

import {
  getAllMessages,
  getAConversation,
  getMessages,
} from "../../store/features/conversations/conversationSlice";
import { socket } from "../../socket";

import {
  sendMessage,
  getNewMessages,
  getNewMessageTest,
} from "../../store/features/messages/messageSlice";

import "./conversations.css";

const Conversation = () => {
  const [message, setMessage] = useState({
    text: "",
    image: "",
  });
  const messagesEndRef = useRef(null);
  const userId = localStorage.getItem("userID");
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();

  const contactPerson = useSelector((state) => state.contactPerson);

  const selectedConversation = useSelector(
    (state) => state.conversation.selectedConversation
  );
  const conversationId = useSelector((state) => state.conversation.id);

  const thisContact = useSelector((state) => state.contactPerson._id);

  const room = conversationId;

  const getConversationMessages = async () => {
    await axios({
      method: "GET",
      url: `http://localhost:8000/api/conversations/${userId}/${thisContact}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    })
      .then((response) => {
        dispatch(getMessages(response.data.conversations[0].messages));
      })
      .catch((error) => {
        return alert(error);
      });
  };

  const sendNewMessage = (event) => {
    event.preventDefault();

    dispatch(
      sendMessage({
        conversationId,
        sender: userId,
        messageText: message.text,
        messageImage: message.image,
      })
    );

    getConversationMessages();

    socket.emit("send-message", {
      conversationId,
      sender: userId,
      messageText: message.text,
      messageImage: message.image,
    });

    event.target.reset();
  };

  const newMessage = useSelector((state) => state.messages.data);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollTo(0, messagesEndRef.current.scrollHeight);
  };

  const messages = useSelector((state) => state.conversation.messages);

  useEffect(() => {
    getConversationMessages();

    socket.on("receive-message", (content) => {
      dispatch(getMessages(newMessage));
    });

    scrollToBottom();
  }, [socket, messages, newMessage]);

  const isSending = useSelector((state) => state.messages.isSending);

  return (
    <div className="discussion__main--container">
      {selectedConversation ? (
        <div className="discussion__main--content">
          <div className="contact__person--container">
            <div className="contact__person--profile">
              <img src="/images/user.png" alt="profile pictur" />
            </div>
            <div className="contact__person--details">
              <h3>
                {contactPerson.firstName} {contactPerson.lastName}
              </h3>
              <p>Online</p>
            </div>
          </div>

          <div className="discussion__main--content">
            {!messages ? (
              <h3>Loading messages...</h3>
            ) : (
              <div className="imessage" ref={messagesEndRef}>
                {messages.map((content) => {
                  return content.sender === userId ? (
                    <div className="from-me-container">
                      <div className="from-me" key={content._id}>
                        {!content.messageImage ? (
                          <p></p>
                        ) : (
                          <img src={content.messageImage} alt="file sended" />
                        )}
                        <p>{content.messageText}</p>
                      </div>
                      <p className="time">
                        {moment(content.createdAt).fromNow()}
                      </p>
                    </div>
                  ) : (
                    <div className="from-them-container">
                      <div className="from-them" key={content._id}>
                        {!content.messageImage ? (
                          <p></p>
                        ) : (
                          <img src={content.messageImage} alt="file sended" />
                        )}
                        <p>{content.messageText}</p>
                      </div>
                      <p className="time">
                        {moment(content.createdAt).fromNow()}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <form onSubmit={sendNewMessage} className="send__message--form">
            <div className="send__message--content">
              <input
                type="text"
                onChange={(event) => {
                  return setMessage({
                    text: event.target.value,
                    image: message.image,
                  });
                }}
                className="send__message--text"
                placeholder="Type message here"
              />
              <div className="send__message--file__container">
                <label htmlFor="uploaderImage" className="send__message--file">
                  <BsCamera className="send__message--image" />
                </label>
                <input
                  type="file"
                  // onChange={(event) => handleImage(event)}
                  name="img"
                  className="send__message--file"
                  id="uploaderImage"
                  accept=".jpg, .jpeg, .png, .webp"
                />
              </div>
            </div>
            <button type="submit" className="send__message--button">
              {isSending ? (
                <div className="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              ) : (
                <BiSend />
              )}
            </button>
          </form>
        </div>
      ) : (
        <div className="no__selected--container">
          <div className="no__selected--content" />
        </div>
      )}
    </div>
  );
};

export default Conversation;
