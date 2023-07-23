import React, { useState } from "react";
import "../styles/sign-up-modal.component.css";
import InputContainer from "./input-container.component";
import { NavLink } from "react-router-dom";

const SignUpModal = ({
  isOpen,
  signUpModalStyles,
  onClose,
  onSignInInsteadClicked,
}) => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log("Full Name:", fullName);
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    onClose();
  };

  const handleFullNameInput = (event) => {
    setFullName(event.target.value);
  };

  const handleUserNameInput = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const handlePaswordInput = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPaswordInput = (event) => {
    setConfirmPassword(event.target.value);
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
            labelTitle={"FullName"}
            value={fullName}
            type={"text"}
            inputStyle={inputStyle}
            inputContainerStyle={inputContainerStyle}
            labelStyle={labelStyle}
            onInputChange={handleFullNameInput}
          />

          <InputContainer
            labelTitle={"Username"}
            value={username}
            type={"text"}
            inputStyle={inputStyle}
            inputContainerStyle={inputContainerStyle}
            labelStyle={labelStyle}
            onInputChange={handleUserNameInput}
          />

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

          <InputContainer
            labelTitle={"Confirm Password"}
            value={confirmPassword}
            type={"password"}
            inputStyle={inputStyle}
            inputContainerStyle={inputContainerStyle}
            labelStyle={labelStyle}
            onInputChange={handleConfirmPaswordInput}
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
            Sign Up
          </button>
        </form>

        <p
          style={{ color: "#FFE142", cursor: "pointer", fontWeight: "bold" }}
          onClick={onSignInInsteadClicked}
        >
          {" "}
          I have an account
        </p>
      </div>
    </div>
  );
};

export default SignUpModal;
