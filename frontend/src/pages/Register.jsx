import React from "react";
import AddAvatar from "../images/attach_avatar.png";
import Logo from "../images/jeek_logo.png";
import { Input } from "semantic-ui-react";

export const Register = () => {
  return (
    <div className="register">
      <img src={Logo} alt="" />
      <div className="circle">
        <div className="formContainer">
          <div className="formWrapper">
            <form>
              <input type="file" id="file" style={{ display: "none" }} />
              <label htmlFor="file">
                <img src={AddAvatar} alt="" />
              </label>

              <Input
                icon="user"
                iconPosition="left"
                placeholder="Display Name"
              />
              <Input
                icon="envelope outline"
                iconPosition="left"
                placeholder="sample@sample.com"
              />
              <Input
                type="password"
                icon="key"
                iconPosition="left"
                placeholder="****"
              />
              <Input
                type="password"
                icon="key"
                iconPosition="left"
                placeholder="****"
              />

              <button>Register</button>
            </form>
            <p>You have an account? Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};
