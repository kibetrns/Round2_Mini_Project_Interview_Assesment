import "../styles/display-pic.component.css"

const DisplayPic = ({imageUrl, altText}) => {
    return (
        <div className="profile-pic-container">
          <img src={imageUrl} alt={altText} className="profile-pic" />
        </div>
      );
    
}
export default DisplayPic