/* eslint-disable arrow-body-style */

import { useEffect } from "react";
import SideBar from "../../components/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { getAllRecentsMessages } from "../../store/features/recentsMessages/recentsMessagesSlice";

// import RecentsMessages from "../../components/RecentMessages";

import RecentsMessages from "../../components/RecentsMessages";
// import Conversation from "../../components/Conversation";
import SearchBar from "../../components/SearchBar";
import "./homepage.css";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRecentsMessages());
  }, [dispatch]);

    const recentsMessages = useSelector((state) => state.recentsMessages);
    
    
  return (
    <div className="home__page--container">
      <SideBar />
      <div>
        {/* <p>Component</p> */}
        <SearchBar />
        <RecentsMessages props={recentsMessages} />
      </div>
      {/* <Conversation /> */}
    </div>
  );
};

export default Home;
