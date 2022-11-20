// import Conversation from "../../components/Conversation";
import SearchBar from "../../components/SearchBar";
// import SideBar from "../../components/SideBar";
// import SideBar from "../../components/SideBar";

import SideBar from "../../components/Sidebar";

// import UserList from "../../components/UserList";

const UsersPage = () => {
  return (
    <div className="home__page--container">
      <SideBar />
      <div>
        <SearchBar />
        {/* <UserList /> */}
      </div>
      {/* <Conversation /> */}
    </div>
  );
};

export default UsersPage;
