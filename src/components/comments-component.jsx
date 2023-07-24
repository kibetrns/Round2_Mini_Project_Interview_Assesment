    import "../styles/comments-component.css";
    import DisplayPic from "./display-pic.component";

    const CommentCard = ({
    username,
    dPImageUrl,
    imageUrl,
    commentBody,
    numberOfComments,
    numberOfLikes,
    numberOfViews,
    }) => {
        


    const onCommentIconClicked = () => {
        alert("TODO")
      }
  
      const onLikeIconClicked = () => {
        alert("TODO")
      }


    return (
        <div className="comment-card-container">
        <div className="comment-card-container__Header">
            <div className="comment-card-container__Header--Right">
            <DisplayPic imageUrl={dPImageUrl} altText={"Display Picture"} />
            <h6>{username}</h6>
            </div>
            <div className="comment-card-container__Header---Left">
            </div>
        </div>

        <div className="comment-card-container__Body">
            <p>{commentBody}</p>
        </div>

        <div className="comment-card-container__Bottom">
            <div className="comment-card-container__Bottom--Left">
            <div className="comment-card-container__Bottom--Left--Item">
                <span class="material-symbols-outlined" onClick={onCommentIconClicked} >comment</span>
                <p>{numberOfComments}</p>
            </div>

            <div className="comment-card-container__Bottom--Left--Item">
            <span class="material-symbols-outlined" onClick={onLikeIconClicked} >favorite</span>
                <p>{numberOfLikes}</p>
            </div>

            <div className="comment-card-container__Bottom--Left--Item">
                <span class="material-symbols-outlined">visibility</span>
                <p>{numberOfViews}</p>
            </div>
            </div>
            <div className="comment-card-container__Bottom--Right">
            </div>
            
        </div>
        </div>
    );
    };

    export default CommentCard;
