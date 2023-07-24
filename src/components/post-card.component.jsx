import "../styles/post-card.component.css";
import DisplayPic from "./display-pic.component";
import CommentCard from "./comments-component";
import { useState } from "react";

const PostCard = ({
  username,
  dPImageUrl,
  imageUrl,
  postBody,
  numberOfComments,
  numberOfLikes,
  numberOfViews,
  postId,
  comments,
  onBlockUserClicked,
  onBlockPostClicked

}) => {

    const [open, setOPen] = useState(false);

    const [showDropdown, setShowDropdown] = useState(false);

    const toggle = () => {
        setOPen(!open);
      };


      const toggleDropdown = () => {
        setShowDropdown((prevShowDropdown) => !prevShowDropdown);
      };
    

      console.log(`In Post Card ${comments}`)

    const onCommentIconClicked = () => {
      alert("TODO")
    }

    const onLikeIconClicked = () => {
      alert("TODO")
    }

    
  return (
    <div className="post-card-container">
      <div className="post-card-container__Header">
        <div className="post-card-container__Header--Right">
          <DisplayPic imageUrl={dPImageUrl} altText={"Display Picture"} />
          <h6>{username}</h6>
        </div>
        <div className="post-card-container__Header---Left">
        <span class="material-symbols-outlined" onClick={toggleDropdown}>more_vert</span>
        {showDropdown && (
            <div className="dropdown-menu">
              {/* Add options here */}
              <ul>
                <li onClick={onBlockUserClicked}>Block User</li>
                <li onClick={onBlockPostClicked}>Block Post</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="post-card-container__Body">
        <p>{postBody}</p>
      </div>

      <div className="post-card-container__Bottom">
        <div className="post-card-container__Bottom--Left">
          <div className="post-card-container__Bottom--Left--Item">
            <span class="material-symbols-outlined" onClick={onCommentIconClicked} >comment</span>
            <p>{numberOfComments}</p>
          </div>

          <div className="post-card-container__Bottom--Left--Item">
            <span class="material-symbols-outlined" onClick={onLikeIconClicked} >favorite</span>
            <p>{numberOfLikes}</p>
          </div>

          <div className="post-card-container__Bottom--Left--Item">
            <span class="material-symbols-outlined">visibility</span>
            <p>{numberOfViews}</p>
          </div>
        </div>
        <div className="post-card-container__Bottom--Right">
          <span class="material-symbols-outlined" onClick={toggle}>expand_more</span>
        </div>

       

        
      </div>
      <div className="post-card-container-comments-container">
        {/*TOD(Fix: Comments not behaving as expected. ) */}
      {open && 
      comments
      .filter((comment) => comment.postId === postId) 
      .map((comment) => (
        <CommentCard
            key={comment.id}
            username={"TODO"}
            dPImageUrl={"/public/assets/Colorful flower bouquet isolated on white bacground..jpeg"}
            imageUrl={"TODO"}
            postBody={comment.body}
            numberOfComments={0}
            numberOfLikes={0}
            numberOfViews={0}
            commentsOfPost={comment}
            />
            ))
      }
        </div>
    </div>
  );
};

export default PostCard;
