import React, { useState } from "react";
import styled from "styled-components";

const ImageGallery = () => {
  const imageArr: string[] = [
    "red",
    "green",
    "blue",
    "yellow",
    "gray",
    "gold",
    "silver",
    "purple",
  ];

  const [currLocation, setCurrLocation] = useState<number>(0);

  const onNextEvet = () => {
    setCurrLocation((prev) => prev - 45);
  };

  const onPervEvet = () => {
    setCurrLocation((prev) => prev + 45);
  };

  return (
    <>
      <button onClick={onPervEvet}>Perv</button>
      <button onClick={onNextEvet}>Next</button>
      <Box currLocation={currLocation}>
        <div>
          {imageArr.map((data, index) => (
            <Image key={index} color={data} index={index}></Image>
          ))}
        </div>
      </Box>
    </>
  );
};

const Box = styled.div<{ currLocation: number }>`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;

  transform-style: preserve-3d;

  & > :first-child {
    position: relative;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;

    transition: 1.5s;
    transform: ${(props) =>
      `perspective(1000px) rotateY(${props.currLocation}deg)`};
  }
`;

const Image = styled.div<{ color: string; index: number }>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};

  position: absolute;
  top: 0;
  left: 0;

  transform-origin: center;
  transform-style: preserve-3d;
  transform: ${(props) =>
    `rotateY(calc(${props.index} * 45deg)) translate3d(0,0,300px)`};

  /* -webkit-box-reflect: below 0px linear-gradient(transparent, #0004); */
`;

export default ImageGallery;
