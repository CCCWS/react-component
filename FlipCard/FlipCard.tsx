import React from "react";
import styled from "styled-components";

interface CardProps {
  width: string;
  height: string;
  scale?: number;
}

const FlipCard = ({ width, height, scale }: CardProps) => {
  return (
    <Card width={width} height={height} scale={scale ? scale : 1}>
      <div>
        <Front>
          {/* <Image></Image>
            <Price>25,000원</Price>
            <Title>Nike Awesome Red Shoes</Title>
            <Tag>Special Edition</Tag> */}
          <div>Front</div>
        </Front>

        <Back>
          {/* <AddBtn>Add To Cart</AddBtn> */}
          <div>Back</div>
        </Back>
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
`;

const Front = styled(FrontBackBase)``;
const Back = styled(FrontBackBase)`
  transform: rotateY(180deg);
`;

const Image = styled.div`
  width: 14.37em;
  height: 14.37em;
  border-radius: 1em;
  margin: 2em auto 1em auto;

  display: block;

  background-color: red;
`;

export default FlipCard;
