import { useState, useEffect } from "react";
import Mobile from "../../../images/mobile.jpg";
import Code from "../../../images/Code.png";
import "../../../css/Code.css";

const ContentCode = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const content1Element = document.getElementById("content1");

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
      className={`container-code ${isVisible ? "visible" : ""}`}
      id="content1"
    >
      <div className="code-topic">Code 01</div>
      <div className="code-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book. Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book.
      </div>
      <div className="code-box">
        <img src={Mobile} alt="Logo" className="code-img-content"></img>
        <img src={Code} alt="Logo" className="code-img-content img-2"></img>
        <button type="button" className="btn code-btn-primary">
          Download
        </button>
      </div>
    </div>
  );
};

export default ContentCode;
