import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../src/page/Home";
import About from "../src/page/About";
import SourceCode from "../src/page/SourceCode";
import Contact from "../src/page/Contact";
import Code01 from "../src/page/SourceCode/Code01";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/code01" element={<Code01 />} />
          <Route path="/sourcecode" element={<SourceCode />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
