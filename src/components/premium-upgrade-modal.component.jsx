import { useState } from "react";
import InputContainer from "./input-container.component";

const PremiumUpgradeModal = ({
  isOpen,
  PremiumUpgradeModalStyles,
  onClose,
  onCompletePaymentClicked,
}) => {
  const [mpesaNumber, setMpesaNumber] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log("Mpesa Numeber:", mpesaNumber);

    onClose();
  };

  const handleMpesaNumberInput = (event) => {
    setMpesaNumber(event.target.value);
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
            <div>
            <h4>UNLOCK MORE FEATURES</h4>
          <h4>PAY MORE KES 1 TO UPGRADE TO PREMIUM</h4>

            </div>
         
          <span class="material-symbols-outlined" onClick={onClose}>
            cancel
          </span>
        </div>

        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleFormSubmit}
        >
          <InputContainer
            labelTitle={"Mpesa Number"}
            value={mpesaNumber}
            type={"text"}
            placeholder={"245712345678"}
            inputStyle={inputStyle}
            inputContainerStyle={inputContainerStyle}
            labelStyle={labelStyle}
            onInputChange={handleMpesaNumberInput}
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
            onClick={onCompletePaymentClicked}
          >
            COMPLETE PAYMENT
          </button>
        </form>
      </div>
    </div>
  );
};

export default PremiumUpgradeModal;
