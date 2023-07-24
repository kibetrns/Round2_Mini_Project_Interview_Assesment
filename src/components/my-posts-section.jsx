import React, { useState, useEffect } from 'react';
import PostCard from './post-card.component';

const MyPostsSection = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=8')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });

    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  }, []); 

  const handleOnBlockUserClicked = (userId) => {
    
  };

  const handleOnBlockPostClicked = (postId) => {
    
  };

  const filteredComments = comments;

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

export default MyPostsSection;
  ``