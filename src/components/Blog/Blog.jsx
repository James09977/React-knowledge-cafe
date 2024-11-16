import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  // console.log(blog);

  const {
    cover,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
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
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
