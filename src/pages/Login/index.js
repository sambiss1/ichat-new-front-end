import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import "./loginPage.css";

const LoginPage = () => {
  return (
    <div className="login__page--container">
      <div className="login__page--left__section">
        <h3>Sign In</h3>
        <p>And get fun with friends</p>
        <LoginForm />
        <p>
          Don’t have an account ?<Link to="/signup">Sign up here.</Link>
        </p>
      </div>
      <div className="login__page--right__section">
        <h1>iChat</h1>
        <div className="login__page--image__container">
          <img src="/images/messages-amico.svg" alt="Message imag" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
