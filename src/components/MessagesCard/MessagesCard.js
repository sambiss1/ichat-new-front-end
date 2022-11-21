/* eslint-disable arrow-body-style */
/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */

import { useSelector, useDispatch } from "react-redux";

// import "./recentsMessages.css";
import { socket } from "../../socket";

import { getContactPerson } from "../../store/features/contactPerson/contactPersonSlice";
import {
  selectConversation,
  getMessages,
  // getAConversation,
  getThisContactPerson,
} from "../../store/features/conversations/conversationSlice";

const MessagesCard = ({ props }) => {
  const userId = localStorage.getItem("userID");
  const token = localStorage.getItem("token");

  const conversationId = useSelector((state) => state.conversation.id);

  const room = conversationId;

  const dispatch = useDispatch();

  const contactPerson = useSelector((state) => state.contactPerson);

  const thisContact = useSelector((state) => state.contactPerson._id);

  const messages = useSelector((state) => state.conversation);

  // console.log(messages);

  return (
    <div
      className="recent__message--card"
      onClick={() => {
        socket.emit("join", { userId, room });

        dispatch(selectConversation(props._id));
        dispatch(getMessages(props.messages));

        dispatch(
          getThisContactPerson(
            props.participants
              .filter((participant) => participant._id !== userId)
              .map((user) => user._id)[0]
          )
        );

        dispatch(
          getContactPerson(
            props.participants
              .filter((participant) => participant._id !== userId)
              .map((user) => user)[0]
          )
        );
      }}
    >
      <div className="recent__message--user__picture">
        <img src="/images/user.png" alt="profile pictur" />
      </div>
      <div className="recent__message--user__message">
        {props.participants
          .map((participant) =>
            participant._id !== userId ? null : participant._id
          )
          .includes(userId)
          ? props.participants.map(
              (member) =>
                member._id !== userId && (
                  <h3 key={member._id}> {member.userName}</h3>
                )
            )
          : ""}
        {props.messages.length <= 0 ? (
          <p>...</p>
        ) : (
          <p>{props.messages[props.messages.length - 1].messageText}</p>
        )}
      </div>
    </div>
  );
};

export default MessagesCard;
