import { Link } from "react-router-dom";
import SignUpForm from "../../components/SignUpForm";
import "./signuppage.css";

const SignUpPage = () => {
  return (
    <div className="signup__page--container">
      <div className="signup__page--left__section">
        <h3> Sign Up </h3>
        <SignUpForm />
        <p>
          Already have an account ? <Link to="/"> Sign in here. </Link>
        </p>
      </div>
      <div className="signup__page--right__section">
        <h1> iChat </h1>
        <div className="signup__page--image__container">
          <img src="/images/messages-amico.svg" alt="Message imag" />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
