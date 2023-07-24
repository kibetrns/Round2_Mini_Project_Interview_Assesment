import DisplayPic from "./display-pic.component";
import "../styles/your-conn-item.component.css";
import GenericButton from "./generic-btn";

const YourConnectionItem = ({
    imageUrl,
    userName,
    btnStyles,
    btnName,
    onClick
}
) => {
    return (
        <div>
            <div className="your-connection-item-container">
                <div className="your-connection-item-container__Left">
                    <DisplayPic imageUrl={imageUrl} altText={"Display Picture"} />
                    <h6>{userName}</h6>
                    
                </div>

                <GenericButton styles={btnStyles} name={btnName} onClick={onClick} />
            </div>
        </div>
    );
};

export default YourConnectionItem