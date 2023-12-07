import React, { useEffect } from 'react';
import bgHeader from "../../images/wall-pre-header-blue-crop.jpg";
import "../../css/Home.css";
import { useNavigate } from "react-router-dom";

const Topic = () => {
  const navigate = useNavigate();
  const handleBtnToSourceCode = () => {
    navigate('/sourcecode')
  }
  const handleBtnToContact = () => {
    navigate('/contact')
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container-topic">
      <img src={bgHeader} alt="walking-presentation" width="100%"></img>
      <div className="container-inside-topic">
        <h1 className="text-white font-welcome">Walking bring enjoy to life</h1>
        <div className="p-btn">
            <button type="button" className="btn btn-primary" onClick={handleBtnToSourceCode}>Free Download</button>
            <button type="button" className="btn btn-light" onClick={handleBtnToContact}>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Topic;
