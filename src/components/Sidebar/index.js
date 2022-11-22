import { MdLogout } from "react-icons/md";
import { Navigate } from "react-router-dom";
import NavBar from "../NavBar";
import "./sidebar.css";

const SideBar = () => {
  return (
    <div className="side__bar--container">
      <div className="side__bar--user__profile">
        <img src="/images/user.png" alt="profile pictur" />
      </div>
      <NavBar />
      <div>
        <MdLogout
          onClick={() => {
            window.localStorage.clear();
            window.location("/");

            <Navigate replace to="/" />;
          }}
        />
      </div>
    </div>
  );
};

export default SideBar;
