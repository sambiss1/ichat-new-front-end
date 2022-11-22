/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import axios from "axios";

import { getContactPerson } from "../../store/features/contactPerson/contactPersonSlice";
import {
  selectConversation,
  getMessages,
  // getAConversation,
  getThisContactPerson,
} from "../../store/features/conversations/conversationSlice";

import { socket } from "../../socket";

const userId = localStorage.getItem("userID");
const token = localStorage.getItem("token");

const UserCard = ({ props }) => {
  const dispatch = useDispatch();

  

  let room = null;
  const createNewConversation = () => {
    axios({
      method: "POST",
      url: `http://localhost:8000/api/conversations/new/${userId}/${props._id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    })
      .then((response) => {
        room = response.data.conversation._id;

        console.log(response.data);

        socket.emit("join", { userId, room });
        dispatch(selectConversation(response.data.conversation._id));

        dispatch(
          getContactPerson(
            response.data.conversation.participants
              .filter((participant) => participant._id !== userId)
              .map((user) => user)[0]
          )
        );
        dispatch(getMessages(response.data.conversation.messages));
        dispatch(
          getThisContactPerson(
            response.data.conversation.participants
              .filter((participant) => participant._id !== userId)
              .map((user) => user._id)[0]
          )
        );
      })
      .catch((error) => console.error(error));
  };

  

  return (
    <div
      className="user__list--card"
      onClick={() => {
        createNewConversation();

        dispatch(getThisContactPerson(props));
        dispatch(getContactPerson(props));
      }}
    >
      <div className="user__list--user__picture">
        <img src="/images/user.png" alt="profile pictur" />
      </div>
      <div className="user__list--user__message">
        <h3>
          {" "}
          {props.firstName} {props.lastName}
        </h3>
      </div>
    </div>
  );
};

export default UserCard;
