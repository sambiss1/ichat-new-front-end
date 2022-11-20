/* eslint-disable arrow-body-style */
/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useSelector } from "react-redux";

import MessagesCard from "../MessagesCard/MessagesCard";
import { getAllRecentsMessages } from "../../store/features/recentsMessages/recentsMessagesSlice";
// import { getContactPerson } from "../../store/features/contactPerson/contactPersonSlice";

import "./recentsMessages.css";

const RecentsMessages = ( {props}) => {
//   const { socket } = useContext(UserContext);

  const token = `${localStorage.getItem("token")}`;
  const userId = localStorage.getItem("userID");
//   const recentMessages = useSelector((state) =>
//     console.log(state.recentsMessages)
//   );

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getAllRecentsMessages());

//     socket.on("receive-message", (data) => {
//       dispatch(getAllRecentsMessages(data));
//     });
//   }, []);

//   console.log(recentMessages);
  return (
    <div className="recent__message--main__container">
      <h3>Recent</h3>
      <div className="recent__message--list">
        {props.isLoading === true ? (
          <h3>Loading...</h3>
        ) : (
          props.data.map(
            (conversation) =>
              conversation && (
                <MessagesCard props={conversation} key={conversation._id} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default RecentsMessages;
