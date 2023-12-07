import { useState, useEffect } from "react";
import Mobile from "../../images/mobile.jpg";
import { useNavigate } from "react-router-dom";

const Content1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
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

  const handleBtnToCode01 = () => {
    navigate('/about/code01')
  }

  return (
    <div
      className={`container-sourcecode ${isVisible ? "visible" : ""}`}
      id="content1"
    >
      <div className="Sourcecode-topic fw-bold">
        <p className="minusmargin">Souce Code for Detecting </p>
        <p>Walking of Your Activity</p>
      </div>
      <div className="Sourcecode-content1-container">
        <div className="Sourcecode-box-1">
          <img src={Mobile} alt="Logo" className="Sourcecode-img-content"></img>
        </div>
        <div className="Sourcecode-box-2">
          <p className="Sourcecode-topic">Code 01</p>
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
            <button type="button" className="btn SC-btn-primary">
              Free Download
            </button>
            <button type="button" className="btn SC-btn-light" onClick={handleBtnToCode01}>
              More Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;
