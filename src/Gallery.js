import React from "react";
import "./Gallery.css";
import Kex1 from "./Kex/1.jpeg";
import Kex2 from "./Kex/2.jpeg";
import Kex3 from "./Kex/3.jpeg";
import Kex4 from "./Kex/4.jpeg";
import Kex5 from "./Kex/5.jpeg";
import Kex6 from "./Kex/6.jpeg";

const Gallery = () => {
  return (
    <div className="wrapper">
      <div className="responsive">
        <div className="gallery">
          <a href={Kex1} target="_blank" rel="noopener noreferrer">
            <img src={Kex1} alt="" />
            <div className="des">Description</div>
          </a>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery">
          <a href={Kex2} target="_blank" rel="noopener noreferrer">
            <img src={Kex2} alt="" />
            <div className="des">Description</div>
          </a>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery">
          <a href={Kex3} target="_blank" rel="noopener noreferrer">
            <img src={Kex3} alt="" />
            <div className="des">Description</div>
          </a>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery">
          <a href={Kex4} target="_blank" rel="noopener noreferrer">
            <img src={Kex4} alt="" />
            <div className="des">Description</div>
          </a>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery">
          <a href={Kex5} target="_blank" rel="noopener noreferrer">
            <img src={Kex5} alt="" />
            <div className="des">Description</div>
          </a>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery">
          <a href={Kex6} target="_blank" rel="noopener noreferrer">
            <img src={Kex6} alt="" />
            <div className="des">Description</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
