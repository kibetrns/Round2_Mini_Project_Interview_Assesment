import React, { useState, useEffect } from 'react';
import PostCard from './post-card.component';
import "../styles/my-followers-section.css";

const MyFollowersSection = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostsForUsers = async () => {
      try {
        const response1 = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
        const response2 = await fetch('https://jsonplaceholder.typicode.com/posts?userId=3');
        const response3 = await fetch('https://jsonplaceholder.typicode.com/posts?userId=2');

        if (!response1.ok || !response2.ok || !response3.ok) {
          throw new Error('Network response was not ok');
        }

        const data1 = await response1.json();
        const data2 = await response2.json();
        const data3 = await response3.json();

        const combinedPosts = [...data1, ...data2, ...data3];
        setPosts(combinedPosts);
        setLoading(false);
      } catch (error) {
        setError('Error fetching posts:', error);
        setLoading(false);
      }
    };

    // Fetch comments data from the API
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        setError('Error fetching comments:', error);
      });
    
    fetchPostsForUsers();
  }, []); // Empty dependency array to ensure the effect runs only once on component mount

  const handleOnBlockUserClicked = (userId) => {
    // Handle the logic for blocking a user
    // ...
  };

  const handleOnBlockPostClicked = (postId) => {
    // Handle the logic for blocking a post
    // ...
  };

  // Assuming filteredComments is the filtered comments data for the posts
  // Replace it with the actual logic to filter comments based on postId
  const filteredComments = comments;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {posts.map((post) => (
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
    </div>
  );
};

export default MyFollowersSection;
