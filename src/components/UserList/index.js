/* eslint-disable arrow-body-style */

import UserCard from "../UserCard/userCard";
import "./userlist.css";

const userId = localStorage.getItem("userID");

const UserList = ({ props }) => {
  return (
    <div className="user__list--main__container">
      <h3>Users</h3>
      <div className="user__list--list">
        {props.isLoading ? (
          <h3>Loading...</h3>
        ) : (
          props.data.map(
            (user) =>
              user._id !== userId && <UserCard props={user} key={user._id} />
          )
        )}
      </div>
    </div>
  );
};

export default UserList;
