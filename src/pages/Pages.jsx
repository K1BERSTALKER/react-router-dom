import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideContent from "../common/components/side/SideContent";
import '../scss/main.scss'
import Header from "../common/Header";
import Home from "../common/components/home/Home"
import Resume from "../common/components/page/Resume";
import Portfolio from '../common/components/page/Portfolio'
import Blog from '../common/components/page/Blog'
import Contact from '../common/components/page/Contact'

function Pages() {
  return (
    <>
      <div className="main__div">
        <div className="side">
          <SideContent />
        </div>
        <main>
          <Router>
            <Header />
            <Routes>
              <Route exact path="/" Component={Home} />
              <Route exact path="/resume" Component={Resume}/>
              <Route exact path="/portfolio" Component={Portfolio}/>
              <Route exact path="/blog" Component={Blog}/>
              <Route exact path="/contact" Component={Contact}/>
            </Routes>
          </Router>
        </main>
        
      </div>
    </>
  );
}

export default Pages;
