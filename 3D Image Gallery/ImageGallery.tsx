import React, { useState } from "react";
import styled from "styled-components";

interface ImageGalleryProps {
  children: any;
}

const ImageGallery = ({ children }: ImageGalleryProps) => {
  console.log(children.length);

  const calcAngle = 360 / children.length;

  interface CurrLocationType {
    index: number;
    location: number;
  }

  const [currLocation, setCurrLocation] = useState<CurrLocationType>({
    index: 0,
    location: 0,
  });

  const onNextEvet = () => {
    setCurrLocation({
      index:
        currLocation.index === children.length - 1 ? 0 : currLocation.index + 1,
      location: currLocation.location - calcAngle,
    });
  };

  const onPervEvet = () => {
    setCurrLocation({
      index:
        currLocation.index === 0 ? children.length - 1 : currLocation.index - 1,
      location: currLocation.location + calcAngle,
    });
  };

  console.log(currLocation);

  return (
    <>
      <button onClick={onPervEvet}>Perv</button>
      <button onClick={onNextEvet}>Next</button>
      <Test>
        <Box currLocation={currLocation.location}>
          <div>
            {children.map((data: any, index: number) => (
              <Image
                onClick={() => console.log(data)}
                key={index}
                // color={data}
                index={index}
                currIndex={currLocation.index === index}
                angle={calcAngle}
              >
                <div>{children[index]}</div>
              </Image>
            ))}
          </div>
        </Box>
      </Test>
    </>
  );
};

const Test = styled.div`
  width: 300px;
  height: 300px;
  /* background-color: blue; */

  margin: 300px;
`;

const Box = styled.div<{ currLocation: number }>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: gold;

  width: 100%;
  height: 100%;

  transform-style: preserve-3d;

  & > :first-child {
    position: relative;

    width: 100%;
    height: 100%;

    /* background-color: red; */

    transform-style: preserve-3d;

    transition: 1s;

    transform: ${(props) =>
      `perspective(1000px) rotateY(${props.currLocation}deg)`};

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Image = styled.div<{
  index: number;
  angle: number;
  currIndex: boolean;
}>`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  transform-style: preserve-3d;

  & > :first-child {
    /* width: 100%;
    height: 100%; */

    opacity: ${(props) => (props.currIndex ? "1" : "0.1")};

    border: ${(props) =>
      props.currIndex ? "5px solid white" : "5px solid transparent"};

    border-radius: 5px;

    transition: 1s;
    transform-origin: center;
    transform: ${(props) =>
      `rotateY(calc(${props.index} * ${props.angle}deg)) rotateX(0deg) translate3d(0,0,300px) `};

    -webkit-box-reflect: below 5px
      linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
  }
`;

export default ImageGallery;
