import { useState, useEffect } from "react";
import Run from "../../images/run.png";
import tw from "../../images/tw-2.png";
import fb from "../../images/fb-2.png";
import yt from "../../images/yt-2.png";
import ig from "../../images/ig-2.png";

const Content1 = () => {
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
      className={`container-about ${isVisible ? "visible" : ""}`}
      id="content1"
    >
      <div className="About-topic">About Us</div>
      <div className="About-content">
        <div className="About-box-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </div>
        <div className="About-box-2">
          <img src={Run} alt="Logo" className="About-img-content"></img>
        </div>
      </div>
      <div className="icon-about">
        <div className="icon-box">
          <a href="/twiter">
            <img src={tw} alt="TW" className="img-footer"></img>
          </a>
        </div>
        <div className="icon-box">
          <a href="/facebook">
            <img src={fb} alt="FB" className="img-footer"></img>
          </a>
        </div>
        <div className="icon-box">
          <a href="/youtube">
            <img src={yt} alt="YT" className="img-footer"></img>
          </a>
        </div>
        <div className="icon-box">
          <a href="Instagram">
            <img src={ig} alt="IG" className="img-footer"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content1;
