import { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import AthleteWomen from "../../images/athlete-woman.jpg";
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

  const handleBtnToAbout = () => {
    navigate('/about')
  }


  return (
    <div
      className={`container-content1 ${isVisible ? "visible" : ""}`}
      id="content1"
    >
      <p className="f-topic">ABOUT US</p>
      <img src={AthleteWomen} alt="Logo" className="img-content1"></img>
      <p className="fw-bolder fs-text1">
        The Best Sports Science College with 40 years of Experience
      </p>
      <p className="fs-6 fw-light">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <div className="f-box">
        <div className="f-inside-box">
          <div>
            <i className="bi bi-check check"></i>
            <span>Sports Scienctist </span>
          </div>
          <div>
            <i className="bi bi-check check d-inline ms-4"></i>
            <span>Professional Staff</span>
          </div>
        </div>
        <div className="f-inside-box">
          <div>
            <i className="bi bi-check check"></i>
            <span>Deep Knowlegde</span>
          </div>
          <div>
            <i className="bi bi-check check d-inline ms-4"></i>
            <span>Good Performance</span>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-primary mt-5" onClick={handleBtnToAbout}>
        More Detail
      </button>
    </div>
  );
};

export default Content1;
