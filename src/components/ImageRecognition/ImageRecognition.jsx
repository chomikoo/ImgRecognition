import React from "react";
import "./ImageRecognition.css";

const ImageRecognition = ({ imageUrl, box }) => {
  return (
    <div className="img__container">
      <img id="inputimage" src={imageUrl} alt="" />
      <div
        className="boundingBox"
        style={{
          top: box.topRow,
          right: box.rightCol,
          bottom: box.bottomRow,
          left: box.leftCol
        }}
      />
    </div>
  );
};

export default ImageRecognition;
