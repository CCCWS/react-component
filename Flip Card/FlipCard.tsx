import React from "react";
import styled from "styled-components";

interface CardProps {
  children: React.ReactNode;
  width: string;
  height: string;
  scale?: number;
}

const FlipCard = ({ children, width, height, scale }: CardProps) => {
  const childrenArr = React.Children.toArray(children);

  return (
    <Card width={width} height={height} scale={scale ? scale : 1}>
      <div>
        <Front>{childrenArr[0]}</Front>
        <Back>{childrenArr[1]}</Back>
      </div>
    </Card>
  );
};

const Card = styled.div<CardProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  perspective: 500px;

  & > :first-child {
    width: inherit;
    height: inherit;
    transform-style: preserve-3d;
    transition: 0.3s;
  }

  &:hover {
    & > :first-child {
      transform: ${(props) => `rotateY(180deg) scale(${props.scale})`};
    }
  }
`;

const FrontBackBase = styled.div`
  background-color: white;
  width: inherit;
  height: inherit;

  position: absolute;
  backface-visibility: hidden;
  border-radius: 10px;

  border: 1px solid black;

  overflow: hidden;
`;

const Front = styled(FrontBackBase)``;
const Back = styled(FrontBackBase)`
  transform: rotateY(180deg);
`;

export default FlipCard;
