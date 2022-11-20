import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import UsersPage from "./pages/Users";
import NotFound from "./pages/NotFound";

import "./App.css";

const App = () => {
  const actualToken = localStorage.getItem("token");
  const auth = localStorage.getItem("auth");
  <BrowserRouter>
    <Routes>
      {!actualToken && !auth ? (
        <>
          <Route index path="/" element={<LoginPage />} />
          <Route
            path="/*"
            element={actualToken ? <NotFound /> : <Navigate replace to="/" />}
          />
          <Route path="/signup" element={<SignUpPage />} />
        </>
      ) : (
        <>
          <Route index element={<Home />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/user" element={<UsersPage />} />
        </>
      )}
    </Routes>
  </BrowserRouter>;
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
              <Route index element={<Home />} />
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
