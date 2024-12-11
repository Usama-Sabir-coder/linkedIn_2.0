import PostInput from "../post/PostInput";
import Posts from "../post/Posts";

const Feed = () => {
  return (
    <div className="flex-1">
      <PostInput />
      <Posts />
    </div>
  );
};

export default Feed;
