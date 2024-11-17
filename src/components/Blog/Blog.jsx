import PropTypes from "prop-types";
import { MdBookmark } from "react-icons/md";

const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
  // console.log(blog);

  const {
    cover,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
    id,
  } = blog;
  return (
    <div>
      <img className="rounded" src={cover} alt="" />

      <div className="flex justify-between items-center mt-8 my-4">
        <div className="flex">
          <img className="w-14 rounded-full" src={author_img} alt="" />
          <div className="ml-6">
            <p className="font-bold text-2xl">{author}</p>
            <small className="text-base text-gray-500">
              Posted date: {posted_date}{" "}
            </small>
          </div>
        </div>
        <div>
          <small className="text-xl text-gray-500">
            {reading_time} min read
          </small>
          <button
            onClick={() => handleBookMark(blog)}
            className="text-2xl ml-1 text-orange-600 align-middle	"
          >
            <MdBookmark></MdBookmark>
          </button>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>

      {hashtags.map((hashTag, idx) => (
        <span key={idx}>
          <a className="text-xl  text-gray-500" href="">
            {" "}
            {hashTag}{" "}
          </a>
        </span>
      ))}
      <br />
      <button
        onClick={() => handleMarkAsRead(reading_time, id)}
        className="my-5 text-xl text-purple-700 font-semibold"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookMark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};
export default Blog;
