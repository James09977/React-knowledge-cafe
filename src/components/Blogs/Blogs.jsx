import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleBookMark, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <h1>Blogs: {blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog
          handleBookMark={handleBookMark}
          handleMarkAsRead={handleMarkAsRead}
          blog={blog}
          key={blog.id}
        ></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleBookMark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blogs;
