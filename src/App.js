import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Video from "./components/Video";
// import Links from "./components/Links";
function App() {
  const links = [
    'http://dl8.heyserver.in/serial/Rick.and.Morty/S01/720p/Rick.and.Morty.S01E01.720p.BRRip.x264.mkv',
    'http://dl8.heyserver.in/serial/Rick.and.Morty/S01/720p/Rick.and.Morty.S01E02.720p.BRRip.x264.mkv',
    'http://dl8.heyserver.in/serial/Rick.and.Morty/S01/720p/Rick.and.Morty.S01E03.720p.BRRip.x264.mkv',
    'http://dl8.heyserver.in/serial/Rick.and.Morty/S01/720p/Rick.and.Morty.S01E04.720p.BRRip.x264.mkv',
    'http://dl8.heyserver.in/serial/Rick.and.Morty/S01/720p/Rick.and.Morty.S01E05.720p.BRRip.x264.mkv',
    'http://dl8.heyserver.in/serial/Rick.and.Morty/S01/720p/Rick.and.Morty.S01E06.720p.BRRip.x264.mkv',
    'http://dl8.heyserver.in/serial/Rick.and.Morty/S01/720p/Rick.and.Morty.S01E07.720p.BRRip.x264.mkv',
    'http://dl8.heyserver.in/serial/Rick.and.Morty/S01/720p/Rick.and.Morty.S01E08.720p.BRRip.x264.mkv',
    'http://dl8.heyserver.in/serial/Rick.and.Morty/S01/720p/Rick.and.Morty.S01E09.720p.BRRip.x264.mkv',
    'http://dl8.heyserver.in/serial/Rick.and.Morty/S01/720p/Rick.and.Morty.S01E10.720p.BRRip.x264.mkv',
    'http://dl8.heyserver.in/serial/Rick.and.Morty/S01/720p/Rick.and.Morty.S01E11.720p.BRRip.x264.mkv',
    "http://dl8.heyserver.in/serial/Rick.and.Morty/S02/480p/Rick.and.Morty.S02E01.480p.mkv",
    "http://dl8.heyserver.in/serial/Rick.and.Morty/S02/480p/Rick.and.Morty.S02E02.480p.mkv",
    "http://dl8.heyserver.in/serial/Rick.and.Morty/S02/480p/Rick.and.Morty.S02E03.480p.mkv",
    "http://dl8.heyserver.in/serial/Rick.and.Morty/S02/480p/Rick.and.Morty.S02E04.480p.mkv",
    "http://dl8.heyserver.in/serial/Rick.and.Morty/S02/480p/Rick.and.Morty.S02E05.480p.mkv",
    "http://dl8.heyserver.in/serial/Rick.and.Morty/S02/480p/Rick.and.Morty.S02E06.480p.mkv",
    "http://dl8.heyserver.in/serial/Rick.and.Morty/S02/480p/Rick.and.Morty.S02E07.480p.mkv",
    "http://dl8.heyserver.in/serial/Rick.and.Morty/S02/480p/Rick.and.Morty.S02E08.480p.mkv",
    "http://dl8.heyserver.in/serial/Rick.and.Morty/S02/480p/Rick.and.Morty.S02E09.480p.mkv",
    "http://dl8.heyserver.in/serial/Rick.and.Morty/S02/480p/Rick.and.Morty.S02E10.480p.mkv",
    "http://dl8.heyserver.in/serial/Rick.and.Morty/S03/480p/Rick.and.Morty.S03E01.480p.HDTV.x264.mkv",
    "http://dl8.heyserver.in/serial/Rick.and.Morty/S03/480p/Rick.and.Morty.S03E02.480p.HDTV.x264.mkv",
    "http://dl8.heyserver.in/serial/Rick.and.Morty/S03/480p/Rick.and.Morty.S03E03.480p.HDTV.x264.mkv",
    "http://dl8.heyserver.in/serial/Rick.and.Morty/S03/480p/Rick.and.Morty.S03E04.480p.HDTV.x264.mkv",
    "http://dl8.heyserver.in/serial/Rick.and.Morty/S03/480p/Rick.and.Morty.S03E05.480p.HDTV.x264.mkv",
    "http://dl8.heyserver.in/serial/Rick.and.Morty/S03/480p/Rick.and.Morty.S03E06.480p.HDTV.x264.mkv",
    "http://dl8.heyserver.in/serial/Rick.and.Morty/S03/480p/Rick.and.Morty.S03E07.480p.HDTV.x264.mkv",
    "http://dl8.heyserver.in/serial/Rick.and.Morty/S03/480p/Rick.and.Morty.S03E08.480p.HDTV.x264.mkv",
    "http://dl8.heyserver.in/serial/Rick.and.Morty/S03/480p/Rick.and.Morty.S03E09.480p.HDTV.x264.mkv",
    "http://dl8.heyserver.in/serial/Rick.and.Morty/S03/480p/Rick.and.Morty.S03E10.480p.HDTV.x264.mkv"
  ];
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
