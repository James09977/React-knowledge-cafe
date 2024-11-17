import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";

import Header from "./components/Header/Header";

function App() {
  const [bookMark, setBookMark] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleBookMark = (blog) => {
    const newBookMarks = [...bookMark, blog];

    setBookMark(newBookMarks);
  };

  const handleMarkAsRead = (time, id) => {
    setReadTime(readTime + time);
    // remove from bookmark
    const remainingBookMark = bookMark.filter((bookMark) => bookMark.id !== id);
    console.log(id);
    setBookMark(remainingBookMark);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleBookMark={handleBookMark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <BookMarks bookMark={bookMark} readTime={readTime}></BookMarks>
      </div>
    </>
  );
}

export default App;
