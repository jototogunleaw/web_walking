import React from "react";
import Header from "../Header";
import "../../css/Home.css";
import "../../css/Contact.css";
import Topic from "./Topic";
import Content1 from "./Content1";

const index = () => {
  return (
    <>
      <Header />
      <div className="p-absolute">
        <Topic />
        <Content1 />
      </div>
    </>
  );
};

export default index;
