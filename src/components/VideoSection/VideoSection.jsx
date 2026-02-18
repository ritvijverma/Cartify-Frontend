import React from "react";
import { Button } from "antd";

const VideoSection = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "550px",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <video
        src="https://ik.imagekit.io/hmqjpocpg/Cartify%20Project/Banner/Homepage_Desktop_RE9.webm"
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Dark Overlay (makes text readable) */}
      <div
     
      />

      {/* Text Content */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          transform: "translateY(-50%)",
          color: "#fff",
        }}
      >
        <h1 style={{ 
            fontSize: "48px"  }}>
          Discover Timeless Style
        </h1>

        <p style={{ fontSize: "18px" }}>
          Elevate your look with our premium collection.
        </p>

        {/* <Button type="primary" size="large">
          Shop Now
        </Button> */}
      </div>
    </div>
  );
};

export default VideoSection;
