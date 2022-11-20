/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-const */

import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { BiSend } from "react-icons/bi";
import { BsCamera } from "react-icons/bs";
import { useDispatch} from "react-redux"
// import axios from "axios";
// import Popup from "reactjs-popup";
import moment from "moment";
// import {AdvancedImage} from "@cloudinary/react";

import {sendMessage} from "../../store/features/messages/messageSlice"

// import {Cloudinary} from "@cloudinary/url-gen"
// import "reactjs-popup/dist/index.css";
import "./conversations.css";

const Conversation = () => {
  const messagesEndRef = useRef(null);

  const userId = localStorage.getItem("userID");
  // const token = localStorage.getItem("token");
  const contactPerson = useSelector((state) => state.contactPerson);

  const selectedConversation = useSelector(
    (state) => state.conversation.selectedConversation
  );
  const  conversationId = useSelector((state) => state.conversation.id)


  const messages = useSelector((state) => state.conversation.messages);

  const dispatch = useDispatch();
    const [message, setMessage] = useState({
      text: "",
      image: "",
    });
  
  const sendNewMessage = () => {
    dispatch(
              sendMessage({
                conversationId,
                sender: userId,
                messageText: message.text,
                messageImage: message.image,
              })
            )
  }

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
                        {content.messageImage ? (
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
                        {content.messageImage ? (
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

          <form
            onSubmit={sendNewMessage}
            className="send__message--form"
          >
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
              {/* {sendingMessage ? (
                <div className="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              ) : ( */}
              <BiSend />
              {/* )} */}
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
