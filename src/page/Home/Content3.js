import React from "react";
import { useState, useEffect } from "react";

const Content3 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const content1Element = document.getElementById("content3");

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
      id="content3"
    >
      <div className="d-flex">
        <div className="me-5 text-start">
          <p className="f-topic">SENT MESSEGE</p>
          <p className="fw-bolder fs-text1">
            Neet to Talk with Founder Please Feel Free to Contact Us
          </p>
          <p className="fs-6 fw-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="fs-6 fw-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="fs-6 fw-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="box-content3">
          <form>
            <div className="form-group margin-top-20px">
              <label htmlFor="FormNameInput"></label>
              <input
                type="text"
                className="form-control"
                id="FormNameInput"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="FormEmailInput"></label>
              <input
                type="email"
                className="form-control"
                id="FormEmailInput"
                placeholder="email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="FormSelectCode"></label>
              <select className="form-control color-gray" id="FormSelectCode">
                <option value>SelectSourceCode...</option>
                <option>code 1</option>
                <option>code 2</option>
                <option>code 3</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="FormMessage"></label>
              <textarea
                className="form-control"
                id="FormMessage"
                placeholder="Message"
                rows="3"
              ></textarea>
            </div>
            <button type="button" className="btn btn-warning">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Content3;
