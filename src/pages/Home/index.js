import SideBar from "../../components/SideBar";
// import RecentsMessages from "../../components/RecentMessages";
// import Conversation from "../../components/Conversation";
// import SearchBar from "../../components/SearchBar";
import "./homepage.css";

const Home = () => {
  return (
    <div className="home__page--container">
      <SideBar />
      <div>
        <p>Component</p>
        {/* <SearchBar /> */}
        {/* <RecentsMessages /> */}
      </div>
      {/* <Conversation /> */}
    </div>
  );
};

export default Home;
