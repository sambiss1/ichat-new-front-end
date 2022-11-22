

const UserCard = ({ props}) => {
  return (
    <div
      className="user__list--card"
    //   onClick={() => {
    //     createNewConversation();
    //   }}
    >
      <div className="user__list--user__picture">
        <img src="/images/user.png" alt="profile pictur" />
      </div>
      <div className="user__list--user__message">
        <h3> {props.userName}</h3>
      </div>
    </div>
  );
}

export default UserCard