import GenericButton from "../components/generic-btn";
import SearchBar from "../components/search-bar";
import "../styles/main-feed-page.css";
import { useState } from "react";
import SignUpModal from "../components/sign-up-modal.component";
import SignInModal from "../components/sign-in-modal.component";
import { NavLink } from "react-router-dom";

const MainFeedPage = () => {
  const signUpBtnStyle = {
    backgroundColor: "#FFE142",
    color: "white",
    fontWeight: "bolder",
    borderRadius: "8%",
    pointer: "cursor",
    padding: "8px 24px",
  };

  const searchBarStyles = {
    backgroundColor: "#D9D9D9",
    padding: "8px",
    borderRadius: "8px",
    width: "50vw",
  };

  const signUpModalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent black overlay
      zIndex: 1000, // Ensure the modal is above other elements
    },
    content: {
      width: "300px",
      height: "200px",
      margin: "auto",
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    },
  };

  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpModalOpen(true);
  };

  const handleSignUpModalClose = () => {
    setIsSignUpModalOpen(false);
  };

  const handleSignInModalClose = () => {
    setIsSignInModalOpen(false);
  };

  const handleIDontHaveAccountClick = () => {
    setIsSignUpModalOpen(true);
    setIsSignInModalOpen(false); 
  };

  const handleIHaveAccountClick = () => {
    setIsSignInModalOpen(true);
    setIsSignUpModalOpen(false); 
  }

  return (
    <div className="main-feed-page">
      <div className="mfph__Bg">
        <div className="main-feed-page__Header">
          <SearchBar
            styles={searchBarStyles}
            sbPlaceholder={"Search"}
            onSearch={"TODO"}
          />
          <GenericButton
            styles={signUpBtnStyle}
            name={"Sign Up"}
            onClick={handleSignUpClick}
          />
          <NavLink to={"/profile"} style={{ color: "black" }}>
            <span class="material-symbols-outlined">person</span>
          </NavLink>
        </div>
      </div>

      <div className="main-feed-page__Body">
        <div className="main-feed-page__Body--Left"></div>
        <div className="main-feed-page__Body--Support"></div>
      </div>
      {isSignUpModalOpen && (
        <SignUpModal
          isOpen={isSignUpModalOpen}
          style={signUpModalStyles}
          onClose={handleSignUpModalClose}
          onSignInInsteadClicked={handleIHaveAccountClick}
        />
      )}

      {isSignInModalOpen && (
        <SignInModal
          isOpen={isSignInModalOpen}
          style={signUpModalStyles}
          onClose={handleSignInModalClose}
          onSignUpInsteadClicked={handleIDontHaveAccountClick}
        />
      )}
    </div>
  );
};

export default MainFeedPage;
