import React, { useCallback, useState } from "react";
import styled from "styled-components";
import test from "./1844b200eed56fc75.jpeg";

const ImageViewer = ({ size, img }) => {
  const [viewerPosition, setScannerPosition] = useState(null);
  const [boxSize, setBoxSize] = useState(null);

  if (!size) throw new Error("size empty");
  if (!img) throw new Error("image empty");

  const onBoxSize = useCallback((component) => {
    if (component) setBoxSize(component.getBoundingClientRect());
  }, []);

  const onMouseMove = (e) => {
    const viewerPosition = { left: 0, top: 0 };

    //e.clientX - boxSize.x => viewer의 위치 변경
    //현재 커서의 위치에서 실제 컴포넌트의 위치를 빼서 컴포넌트 내부에서의 커서 위치를 계산

    //boxSize.width / 4 => 커서가 중앙에 위치하도록 위치 조정
    //viewer의 크기(boxSize.width / 2)에 다시 반을 나눠서 중앙에 위치
    const viewerPosX = e.clientX - boxSize.x - boxSize.width / 4;
    const viewerPosY = e.clientY - boxSize.y - boxSize.width / 4;

    const checkPosX = viewerPosX >= 0 && viewerPosX <= 250;
    const checkPosY = viewerPosY >= 0 && viewerPosY <= 250;

    if (checkPosX) {
      viewerPosition.left = viewerPosX;
    } else {
      if (viewerPosX < 0) {
        viewerPosition.left = 0;
      } else {
        viewerPosition.left = 250;
      }
    }

    if (checkPosY) {
      viewerPosition.top = viewerPosY;
    } else {
      if (viewerPosY < 0) {
        viewerPosition.top = 0;
      } else {
        viewerPosition.top = 250;
      }
    }

    setScannerPosition(viewerPosition);
  };

  const onMouseLeave = () => {
    setScannerPosition();
  };

  return (
    <Div
      ref={onBoxSize}
      img={`url('${img}')`}
      size={size}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {boxSize && viewerPosition && (
        <>
          <Viewer position={viewerPosition} size={boxSize.width / 2} />

          <Test>
            <ZoomViewer
              position={viewerPosition}
              img={`url('${img}')`}
              onMouseMove={onMouseLeave}
            />
          </Test>
        </>
      )}
    </Div>
  );
};

const Div = styled.div`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};

  position: relative;

  background-image: ${(props) => props.img};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Viewer = styled.span`
  position: absolute;

  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};

  left: ${(props) => `${props.position.left}px`};
  top: ${(props) => `${props.position.top}px`};

  border: 1px solid gray;
  background-color: rgba(0, 0, 0, 0.3);

  ::before {
    content: "test";
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Test = styled.div`
  position: absolute;
  top: 0;
  left: calc(100% + 20px);
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  border: 1px solid gray;
`;

const ZoomViewer = styled.div`
  width: 100%;
  height: 100%;
  scale: 2;
  transform-origin: left top;
  background-image: ${(props) => props.img};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  transform: ${(props) =>
    `translate(-${props.position.left}px, -${props.position.top}px)`};
`;

export default ImageViewer;
