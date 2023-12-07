import React from "react";
import tw from "../images/tw-2.png";
import fb from "../images/fb-2.png";
import yt from "../images/yt-2.png";
import ig from "../images/ig-2.png";

const Footer = () => {
  return (
    <div className="container-fluid bg-blue">
      <div className="container-footer">
        <div className="box-footer1">
          <p className="topic-footer">Startup</p>
          <p className="fs-6 fw-light f-footer">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button type="button" className="btn btn-outline-warning">
            Submit
          </button>
        </div>
        <div className="box-footer2">
          <p className="topic-footer2">Information About</p>
          <p className="text-footer2">999 Phuttamonthon 4 Road, Salaya,</p>
          <p className="text-footer2">Nakhon Parhom 73170 Thailand</p>
          <p className="text-footer2">
            College of Sports Science and Technology
          </p>
          <p className="text-footer2">02-441-4295-8</p>
          <div className="icon-footer">
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
      </div>
    </div>
  );
};

export default Footer;
