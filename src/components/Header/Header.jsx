import React from "react";
import "./Header.css";
export default function header() {
  return (
    <div>
      <div className="header">
        <div className="headertitles">
          <span className="headertitlesm">Personal</span>
          <span className="headertitlelg">Blog</span>
        </div>
        <img
          className="headerImg"
          alt=""
          src="https://images.pexels.com/photos/8984277/pexels-photo-8984277.jpeg?cs=srgb&dl=pexels-slava-mkrvsky-8984277.jpg&fm=jpg"
        />
      </div>
    </div>
  );
}
