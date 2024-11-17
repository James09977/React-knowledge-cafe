import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";

const BookMarks = ({ bookMark, readTime }) => {
  return (
    <div className="md:w-1/3">
      <div className="m-6 bg-purple-200 rounded-lg py-5 px-12 ">
        <h3 className="text-purple-700 font-bold text-2xl">
          Spent time on read: {readTime} min
        </h3>
      </div>
      <div className="bg-gray-200 m-7 p-4 rounded-lg">
        <h2 className="text-2xl font-bold ">
          BookMarked Blogs: {bookMark.length}
        </h2>
        {bookMark.map((bookMark, idx) => (
          <BookMark key={idx} bookMark={bookMark}></BookMark>
        ))}
      </div>
    </div>
  );
};

BookMarks.propTypes = {
  bookMark: PropTypes.array.isRequired,
  readTime: PropTypes.number,
};

export default BookMarks;
