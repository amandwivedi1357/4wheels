import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./login.css";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div className="login-container">
      <div className="wrapper">
        <form action="#">
          <h2>Login</h2>
          <div className="input-field">
            <input type="text" required />
            <label>Email</label>
          </div>
          <div className="input-field">
            <input
              type={passwordVisible ? "text" : "password"}
              required
            />
            <label>Password</label>
            <div className="password-toggle" onClick={togglePasswordVisibility}>
              {passwordVisible ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </div>
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
