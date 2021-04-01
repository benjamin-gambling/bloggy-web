import { useState } from "react";

const Post = ({ post }) => {
  const [editPost, setEditPost] = useState(false);

  const Img = () =>
    post?.image ? <img alt={post.title} src={post.image}></img> : null;

  const EditButton = () => {};
  const DeleteButton = () => {};
  const PostBlurb = () => {};
  const Edit = () => {};

  return (
    <>
      <h1>{post.title}</h1>
      <Img />
      <EditButton />
      <DeleteButton />
      {editPost ? (
        <Edit text={post.content} />
      ) : (
        <PostBlurb text={post.content} />
      )}
    </>
  );
};

export default Post;
