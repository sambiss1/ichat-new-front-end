/* eslint-disable arrow-body-style */
/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
// import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// import { getAllRecentsMessages } from "../../store/features/recentsMessages/recentsMessagesSlice";
// import { getContactPerson } from "../../store/features/contactPerson/contactPersonSlice";
// import "./recentsMessages.css";

import { getContactPerson } from "../../store/features/contactPerson/contactPersonSlice";
import {selectConversation} from "../../store/features/conversations/conversationSlice"

const MessagesCard = ({ props }) => {
  const userId = localStorage.getItem("userID");
  const token = localStorage.getItem("token");

  //   const room = conversationId;

  const dispatch = useDispatch();

  const contactPerson = useSelector((state) => state.contactPerson);

  // console.log(contactPerson);

  return (
    <div
      className="recent__message--card"
      onClick={() => {
        // socket.emit("join", { userId, room });


        dispatch(selectConversation(props._id));
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
