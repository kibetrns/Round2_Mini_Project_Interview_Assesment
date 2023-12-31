import GenericButton from "../components/generic-btn";
import SearchBar from "../components/search-bar";
import "../styles/main-feed-page.css";
import { useState, useEffect } from "react";
import SignUpModal from "../components/sign-up-modal.component";
import SignInModal from "../components/sign-in-modal.component";
import { NavLink } from "react-router-dom";
import PostCard from "../components/post-card.component";
import YourConnectionCard from "../components/your-conn.component";
import PremiumUpgradeModal from "../components/premium-upgrade-modal.component";


const fetchPosts = async () => {

  //TODO("Support multiple screens")
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

const fetchComments = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
};


const fetchUsers = async (limit) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=${limit}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};



const MainFeedPage = () => {
  const signUpBtnStyle = {
    backgroundColor: "#FFE142",
    color: "white",
    fontWeight: "bolder",
    borderRadius: "8%",
    pointer: "cursor",
    padding: "8px 24px",
  };

  const mainFeedPageHeaderSearchBarStyle = {
    backgroundColor: "#D9D9D9",
    padding: "8px",
    borderRadius: "8px",
    width: "50vw",
  };

  const mainFeedPageBoodySearchBarStyle = {
    backgroundColor: "#D9D9D9",
    padding: "8px",
    borderRadius: "8px",
    width: "40vw",
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

  const loadMoreBtnStyle = {
    backgroundColor: "#FFE142",
    color: "white",
    fontWeight: "bolder",
    borderRadius: "8%",
    pointer: "cursor",
    padding: "8px 24px",
    alignText: "center",
  };

  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const [isPremiumUpgradeModalOpen, setPremiumUpgradeModalOpen] = useState(false);


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

  const handleOnBlockUserClicked = () => {
    setPremiumUpgradeModalOpen(true)

  }

  const handleOnBlockPostClicked = () =>  {
    setPremiumUpgradeModalOpen(true)
  }

  const handleIHaveAccountClick = () => {
    setIsSignInModalOpen(true);
    setIsSignUpModalOpen(false);
  };

  const handleLoadMoreClick = () => {};

  const handlePostClick = () => {
    //TODO("Put/Patch to API")
    alert("TODO")
  };

  const handlePremiumUpgradeModalClose = () => {
    setPremiumUpgradeModalOpen(false)

  }

  const handlePremiumUpgradeModalClick = () =>  {
    //TODO("Connect with Mpesa")
    alert("TODO")
  }

  const [searchInput, setSearchInput] = useState('');
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);

  const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);

      const fetchedComments = await fetchComments();
      setComments(fetchedComments);

        const fetchedUsers = await fetchUsers(5); // Fetch the first 5 users
        setUsers(fetchedUsers);
      
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredPosts(filteredPosts);

    const filteredComments = comments.filter((comment) =>
      comment.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredComments(filteredComments);
  }, [searchInput, posts, comments]);


  return (
    <div className="main-feed-page">
      <div className="mfph__Bg">
        <div className="main-feed-page__Header">
          <SearchBar
            styles={mainFeedPageHeaderSearchBarStyle}
            sbPlaceholder={"Search"}
            onSearch={setSearchInput}
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
        <div className="main-feed-page__Body--Left">
          <div className="main-feed-page__Body--Left--header">
            <div className="main-feed-page__Body--Left--header--Bg">
              <SearchBar
                styles={mainFeedPageBoodySearchBarStyle}
                sbPlaceholder={"Type something..."}
                onSearch={setSearchInput}
              />
              <GenericButton
                styles={signUpBtnStyle}
                name={"Post"}
                onClick={handlePostClick}
              />
            </div>
          </div>

          {filteredPosts.map((post) => (
            <PostCard
              key={post.id}
              postId={post.id}
              username={post.userId}
              dPImageUrl="/public/assets/Colorful flower bouquet isolated on white bacground..jpeg"
              imageUrl="TODO"
              postBody={post.body}
              numberOfComments={0}
              numberOfLikes={0}
              numberOfViews={0}
              comments={filteredComments.filter((comment) => comment.postId === post.id)}
              onBlockUserClicked={handleOnBlockUserClicked}
              onBlockPostClicked={handleOnBlockPostClicked}
            />
          ))}

          /*TODO("Implement `gracefull loading` based on privilages and membership ")*/


          <GenericButton
            styles={loadMoreBtnStyle}
            name={"Load More"}
            onClick={handleLoadMoreClick}
          />
        </div>

        <div className="main-feed-page__Body--Support">
          <YourConnectionCard users={users} />
        </div>
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

      {isPremiumUpgradeModalOpen && (
        <PremiumUpgradeModal
          isOpen={isPremiumUpgradeModalOpen}
          style={signUpBtnStyle}
          onClose={handlePremiumUpgradeModalClose}
          onCompletePaymentClicked={handlePremiumUpgradeModalClick}
        
        />

      )}
    </div>
  );
};

export default MainFeedPage;
