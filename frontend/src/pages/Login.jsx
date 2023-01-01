import React from "react";
import Logo from "../images/jeek_logo.png";
import { Input } from "semantic-ui-react";

export const Login = () => {
  return (
    <div className="register">
      <img src={Logo} alt="" />
      <div className="circle">
        <div className="formContainer">
          <div className="formWrapper">
            <form>
              <Input
                icon="envelope outline"
                id="email"
                iconPosition="left"
                placeholder="sample@sample.com"
              />
              <Input
                icon="key"
                id="password"
                iconPosition="left"
                placeholder="****"
              />

              <button>Login</button>
            </form>
            <p>Don't have an account? Register</p>
          </div>
        </div>
      </div>
    </div>
  );
};
