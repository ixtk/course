const PostCard = (props) => {
  return (
    <article className={props.postspoiler ? "post spoiler" : "post"}>
      <div className="img-container">
        <img className="post-img" src={props.postimage} alt="Movie image" />
      </div>
      <h2 className="post-title">
        <a href="#">{props.posttitle}</a>
      </h2>
      <span className={props.postspoiler ? "spoiler-warning" : ""}>
        {props.postspoiler && "Spoiler warning"}
      </span>
    </article>
  );
};

export default PostCard;
