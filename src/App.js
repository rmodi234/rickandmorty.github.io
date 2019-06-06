import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Video from "./components/Video";
import Config from "./components/Links";
function App() {
  
  const links = Config.urls();
  // console.log(links);  
  return (
    <React.Fragment>
      <Header />
      
      <div class="container">
        <h1>Rick and morty all episodes</h1>
        <div class="row">
          {links.map((link, index) => (
            <Video key={index} link={link} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
