import { useState, useEffect } from "react";
import Computer from "../../images/Computer.png";

const Content2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const content1Element = document.getElementById("content2");

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
      className={`container-sourcecode ${isVisible ? "visible" : ""}`}
      id="content2"
    >
      <div className="Sourcecode-content2-container">
        <div className="Sourcecode-box-2 box-2-2 text-white">
          <p className="Sourcecode-topic">Code 02</p>
          <p className="Sourcecode-box-2-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="Sourcecode-p-btn">
            <button type="button" className="btn SC-btn-primary btn1-content2">
              Free Download
            </button>
            <button type="button" className="btn SC-btn-light btn2-content2">
              More Detail
            </button>
          </div>
        </div>
        <div className="Sourcecode-box-1 box-1-2">
          <img src={Computer} alt="Logo" className="Sourcecode-img-content"></img>
        </div>
      </div>
    </div>
  );
};

export default Content2;
