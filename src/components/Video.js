import React from "react";
// import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
function Video(props) {
  return (
    <div class="col-sm">
      <video width="320" height="240" controls>
        <source src={props.link} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;
