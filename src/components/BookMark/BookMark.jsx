import PropTypes from "prop-types";

const BookMark = ({ bookMark }) => {
  //   console.log(bookMark);
  const { title } = bookMark;

  return (
    <div className="bg-white p-5 my-4 rounded-xl">
      <p className="text-lg font-semibold">{title}</p>
    </div>
  );
};

BookMark.propTypes = {
  bookMark: PropTypes.object.isRequired,
};

export default BookMark;
