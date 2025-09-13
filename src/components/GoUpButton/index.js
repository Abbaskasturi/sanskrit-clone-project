import { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import "./index.css";

const GoUpButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {show && (
        <button className="go-up-btn" onClick={handleClick}>
          <MdKeyboardArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default GoUpButton;
