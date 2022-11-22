/* eslint-disable arrow-body-style */

import { useEffect } from "react";
import SearchBar from "../../components/SearchBar";

import { useSelector, useDispatch } from "react-redux";

import { getAllContacts } from "../../store/features/contactList/contactListSlice";

import SideBar from "../../components/Sidebar";
import UserList from "../../components/UserList";
import Conversation from "../../components/Conversation";

const UsersPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllContacts());
  }, []);

  const usersList = useSelector((state) => state.contactList);

  return (
    <div className="home__page--container">
      <SideBar />
      <div>
        <SearchBar />
        <UserList props={usersList} />
      </div>
      <Conversation />
    </div>
  );
};

export default UsersPage;
