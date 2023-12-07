import React, { useEffect } from 'react';
import Callcenter from "../../images/callcenter.jpg";
import "../../css/Home.css";

const Topic = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container-contact-topic">
      <img src={Callcenter} alt="walking-presentation" width="100%"></img>
      <div className="container-contact-inside-topic">
        <h1 className="text-white font-welcome">Contact Us</h1>
      </div>
    </div>
  );
};

export default Topic;
