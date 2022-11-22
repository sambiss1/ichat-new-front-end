import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import "./sidebar.css";

const SideBar = () => {
  const navigate = useNavigate();
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

            navigate("/", { replace: true });
          }}
        />
      </div>
    </div>
  );
};

export default SideBar;
