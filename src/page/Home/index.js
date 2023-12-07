import React from 'react';
import Topic from "./Topic";
import '../../css/Header.css'
import '../../css/Home.css'
import '../../css/Footer.css'
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";
import Content4 from "./Content4";
import Header from "../Header";
import Footer from "../Footer";


const index = () => {

  return (
    <>
    <Header />
    <div className="p-absolute">
      <Topic />
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      <Footer />
    </div>
    </>
  );
};

export default index;