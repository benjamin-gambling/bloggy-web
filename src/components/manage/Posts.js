import { useEffect, useState } from "react";
import PostThumbnail from "./PostThumbnail";
import Loading from "../utils/Loading";

const Posts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDU2ZDU0NjAzZmU3OTFhM2UzMjljNDIiLCJlbWFpbCI6ImJlbmphbWluLmdhbWJsaW5nQGdtYWlsLmNvbSIsImlhdCI6MTYxNjk3Mzc2OCwiZXhwIjoxNjE3MDE2OTY4fQ.qbr6kO4YXl6wwXo8CI97nqvrTMICrdF0F0TWuHdhE0Q";

  useEffect(() => {
    fetch("http://localhost:5000/api/posts/user/6056d54603fe791a3e329c42", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(
        (res) => {
          console.log(res);
          setPosts(res);
          setIsLoading(false);
        },
        (err) => {
          console.log(err);
        }
      );
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    posts.map((post) => <PostThumbnail key={post._id} post={post} />)
  );
};

export default Posts;
