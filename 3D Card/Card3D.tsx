import React, { useState, useRef, useEffect, ReactNode } from "react";
import styled from "styled-components";

interface CardProps {
  children: ReactNode;
  perspective: number;
  hoverScale?: number;
}

interface CardSize {
  width: number;
  height: number;
}

const Card3D = ({ children, perspective, hoverScale }: CardProps) => {
  const [cardSize, setCardSize] = useState<CardSize>({
    width: 0,
    height: 0,
  });
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cardRef.current) {
      setCardSize({
        width: cardRef.current.getBoundingClientRect().width,
        height: cardRef.current.getBoundingClientRect().height,
      });
    }
  }, [cardRef]);

  const map = (
    val: number,
    minA: number,
    maxA: number,
    minB: number,
    maxB: number
  ) => {
    return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
  };

  const onMouseOver = (e: React.MouseEvent) => {
    const mouseX = e.nativeEvent.offsetX;
    const mouseY = e.nativeEvent.offsetY;
    const rotateY = map(mouseX, 0, cardSize.width, -25, 25); //300 > Card의 width
    const rotateX = map(mouseY, 0, cardSize.height, 25, -25); //250 > Card의 height
    const brightness = map(mouseY, 0, 300, 1.5, 0.7);

    if (cardRef.current) {
      cardRef.current.style.setProperty(
        "transform",
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      );
      cardRef.current.style.setProperty("filter", `brightness(${brightness})`);
    }
  };

  const onMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.setProperty(
        "transform",
        "rotateX(0deg) rotateY(0deg)"
      );
      cardRef.current.style.setProperty("filter", "brightness(1)");
      cardRef.current.style.setProperty("transform", "scale(1)");
    }
  };

  return (
      <Card perspective={perspective} $hoverScale={hoverScale}>
        <div
          onMouseMove={(e) => onMouseOver(e)}
          onMouseLeave={onMouseLeave}
          ref={cardRef}
        >
          {children}
        </div>
      </Card>
  );
};

const Card = styled.div<{ perspective: number; $hoverScale?: number }>`
  display: inline-block;
  transition: 0.5s;
  perspective: ${(props) => `${props.perspective}px`};

  &:hover {
    transform: ${(props) =>
      props.$hoverScale ? `scale(${props.$hoverScale})` : "scale(1)"};
  }

  & > :first-child {
    transition: all 0.3s ease-out;
  }
`;

export default Card3D;
