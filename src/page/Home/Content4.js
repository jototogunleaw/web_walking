import React from "react";
import { useState, useEffect } from "react";
import CEO from "../../images/PYo.png"

const Content4 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const content1Element = document.getElementById("content4");

    if (content1Element) {
      const content1Position = content1Element.offsetTop;

      if (scrollPosition > content1Position - window.innerHeight) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`container-content1 ${isVisible ? "visible" : ""} text-center`}
      id="content4"
    >
      <p className="f-topic">TEAM MEMBERS</p>
      <div className="fw-bolder fs-text1">
        <p className="minusmargin">Professional Staff</p>
        <p>Ready to Help</p>
      </div>
      <img src={CEO} alt="CEO" className="img-ceo"></img>
      <p className="f-topic text-dark">KITTICHAI THARAWDEEPIMUK</p>
    </div>
  );
};

export default Content4;
