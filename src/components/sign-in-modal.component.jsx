import React, { useState } from "react";
import "../styles/sign-in-modal.component.css";
import InputContainer from "./input-container.component";
import { NavLink } from "react-router-dom";

const SignInModal = ({
  isOpen,
  signUpModalStyles,
  onClose,
  onSignUpInsteadClicked,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    onClose();
  };

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const handlePaswordInput = (event) => {
    setPassword(event.target.value);
  };

  const inputStyle = {
    width: "99%",
    backgroundColor: "#F1F1F1",
    border: "none",
    padding: "2% 0%",
  };

  const labelStyle = {
    marginRight: "4%",
  };

  const inputContainerStyle = {
    marginBottom: "16px",
    display: "flex",
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/*TODO("Fix:
        
        close icon  should be at the top-right of the `modal-content-div` 
        the text input should be properly aligned, does not look "good"
        
        ") */}
        <div className="modal-content__Header">
          <h2>Create Account</h2>
          <span class="material-symbols-outlined" onClick={onClose}>
            cancel
          </span>
        </div>

        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleFormSubmit}
        >
          <InputContainer
            labelTitle={"Email"}
            value={email}
            type={"email"}
            inputStyle={inputStyle}
            inputContainerStyle={inputContainerStyle}
            labelStyle={labelStyle}
            onInputChange={handleEmailInput}
          />

          <InputContainer
            labelTitle={"Password"}
            value={password}
            type={"password"}
            inputStyle={inputStyle}
            inputContainerStyle={inputContainerStyle}
            labelStyle={labelStyle}
            onInputChange={handlePaswordInput}
          />

          <button
            type="submit"
            style={{
              fontWeight: "bolder",
              cursor: "pointer",
              color: "white",
              backgroundColor: "#FFE142",
              borderRadius: "4%",
              padding: "8px 0px",
              textAlign: "center",
            }}
          >
            Sign In
          </button>
        </form>

        <p
          onClick={onSignUpInsteadClicked}
          style={{ color: "#FFE142", cursor: "pointer", fontWeight: "bold" }}
        >
          {" "}
          I have DON'T have an account
        </p>
      </div>
    </div>
  );
};

export default SignInModal;
