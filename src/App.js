/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */

import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import UsersPage from "./pages/Users";
import NotFound from "./pages/NotFound";
import { socket } from "./socket";

import "./App.css";

const App = () => {
  const actualToken = localStorage.getItem("token");
  // const auth = localStorage.getItem("auth");

  const auth = useSelector((state) => state.user.auth);

  useEffect(() => {
    socket.on(`http://localhost:8000`, (data) => {
      console.log(data);
    });

    socket.on("connect_error", (error) => {
      console.log(`connect_error due to ${error.message}`);
    });

    socket.on("connect_failed", () => {
      console.log("Sorry, there seems to be an issue with the connection!");
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {!actualToken && !auth ? (
            <>
              <Route index path="/" element={<LoginPage />} />
              <Route
                path="/*"
                element={
                  actualToken ? <NotFound /> : <Navigate replace to="/" />
                }
              />
              <Route path="/signup" element={<SignUpPage />} />
            </>
          ) : (
            <>
              <Route
                path="/"
                element={!actualToken && !auth ? <NotFound /> : <LoginPage />}
              />
              <Route path="/" element={<LoginPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/*" element={<NotFound />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/user" element={<UsersPage />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
