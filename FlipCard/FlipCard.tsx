import React from "react";
import styled from "styled-components";

const FlipCard = () => {
  return (
    <Div>
      <CardBox>
        <Card>
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
        </Card>
      </CardBox>
    </Div>
  );
};

const Div = styled.div`
  margin: 100px;
`;

const Card = styled.div`
  width: inherit;
  height: inherit;
  transform-style: preserve-3d;
  transition: 0.5s;
`;

const CardBox = styled.div`
  width: 300px;
  height: 400px;
  perspective: 500px;
  position: relative;

  &:hover {
    ${Card} {
      transform: rotateY(180deg);
    }
  }
`;

const FBbase = styled.div`
  background-color: white;
  width: inherit;
  height: inherit;

  position: absolute;
  backface-visibility: hidden;
  border-radius: 1em;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3rem;
`;

const Front = styled(FBbase)``;
const Image = styled.div`
  width: 14.37em;
  height: 14.37em;
  border-radius: 1em;
  margin: 2em auto 1em auto;

  display: block;

  background-color: red;
`;

const Price = styled.h2`
  text-align: center;
  font-size: 2em;
  font-weight: 300;
  color: gray;
`;
const Title = styled.h3`
  text-align: center;
  font-size: 1em;
  font-family: 500;
`;
const Tag = styled.h6`
  text-align: center;
  color: #707070;
  font-weight: 500;
  letter-spacing: 0.1em;
`;

const Back = styled(FBbase)`
  transform: rotateY(180deg);
`;
const AddBtn = styled.button`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;

  width: 12.5em;
  font-size: 1em;

  background-color: #cc091f;

  color: #ffffff;
  border-radius: 0.5em;
  padding: 1em;
  cursor: pointer;
  border: none;
  outline: none;
`;

export default FlipCard;
