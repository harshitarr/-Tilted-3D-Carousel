"use client";

import React, { useEffect, useState, useRef } from "react";

const TiltedCarousel = () => {
  const images = [
    "/dragon_1.jpg",
    "/dragon_2.jpg",
    "/dragon_3.jpg",
    "/dragon_4.webp",
    "/dragon_5.jpg",
    "/dragon_6.jpg",
    "/dragon_7.jpg",
    "/dragon_8.png",
    "/dragon_9.jpeg",
    "/dragon_10.jpg",
  ];

  const [angle, setAngle] = useState(0);
  const angleRef = useRef(0);

  const [dimensions, setDimensions] = useState({
    radius: 550,
    imageWidth: 270,
    imageHeight: 170,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDimensions({
          radius: 300,
          imageWidth: 140,
          imageHeight: 90,
        });
      } else if (width < 1024) {
        setDimensions({
          radius: 400,
          imageWidth: 200,
          imageHeight: 120,
        });
      } else {
        setDimensions({
          radius: 550,
          imageWidth: 270,
          imageHeight: 170,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      angleRef.current = (angleRef.current - 0.2) % 360;
      setAngle(angleRef.current);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const { radius, imageWidth, imageHeight } = dimensions;

  return (
    <div
      className="w-screen h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="relative"
        style={{
          width: imageWidth * 4,
          height: imageHeight * 2,
          perspective: "1200px",
          perspectiveOrigin: "50% 50%",
          marginTop: "-16%",
        }}
      >
      
        <div
          className="absolute top-1/2 left-1/2 z-20"
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
            <img
            src="/bgin.png"
            alt="Center"
            style={{
                width: imageWidth * 0.75,
                height: "auto",
                marginTop: `${imageHeight * 0.8}px`,
                boxShadow: "0 10px 20px rgba(0,0,0,0.6)",
            }}
            />
         
        </div>

        <div
          className="relative w-full h-full origin-center"
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "50% 50%",
            transform: `rotateX(-18deg) rotateY(${angle}deg)`,
          }}
        >
          {images.map((src, i) => {
            const deg = (360 / images.length) * i;
            const transform = `
              rotateY(${deg}deg)
              translateZ(${radius}px)
            `;
            return (
              <img
                key={i}
                src={src}
                alt={`dragon-${i}`}
                className="absolute top-1/2 left-1/2 origin-center rounded-xl object-cover"
                style={{
                  width: imageWidth,
                  height: imageHeight,
                  marginTop: -(imageHeight / 2),
                  marginLeft: -(imageWidth / 2),
                  transform,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.7)",
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TiltedCarousel;
