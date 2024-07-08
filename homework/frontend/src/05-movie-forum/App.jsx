import "./App.css";
import PostCard from "./Post";
import data from "./data.json";

const MovieForum = () => {
  const posts = data.map((post, postIndex) => {
    return (
      <PostCard
        key={postIndex}
        postimage={post.image}
        posttitle={post.title}
        postspoiler={post.spoiler}
      />
    );
  });
  return (
    <>
      <h1>Movie forum 🎥</h1>
      <div className="post-container">{posts}</div>
    </>
  );
};

export default MovieForum
