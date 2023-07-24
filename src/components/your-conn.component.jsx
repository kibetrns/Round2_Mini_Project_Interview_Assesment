import "../styles/your-conn.component.css";
import GenericButton from "./generic-btn";
import YourConnectionItem from "./your-conn-item.component";

const YourConnectionCard = ({ users }) => {

    //TODO("Add component functionality")
  const followingStyle = {
    color: "black",
    border: "solid 2px #FFE142",
    backgroundColor: "white",
    borderRadius: '8%'
  };

  const notFollowingStyle = {
    color: "black",
    backgroundColor: "#FFE142",
    borderRadius: '8%'

  }

  const handleClick = () => {
    alert("TODO")
  };

  return (
    <div>
      <div className="your-connection-card">
        <div className="your-connection-card__Header">
          <h4>Your Connection</h4>
        </div>
        <div className="your-connection-card__Body">
          {users.map((user) => (
            <YourConnectionItem
              imageUrl={
                "/public/assets/Colorful flower bouquet isolated on white bacground..jpeg"
              }
              userName={user.username}
              btnStyles={followingStyle}
              btnName={"Following"}
              onClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default YourConnectionCard;
