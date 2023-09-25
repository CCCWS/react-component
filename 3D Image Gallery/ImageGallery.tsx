import React, {
  useCallback,
  useEffect,
  useState,
  useLayoutEffect,
  useRef,
} from "react";
import styled, { css } from "styled-components";

import { Page, PageDiv } from "@Style/PageStyle";

import Ttest from "./Ttest";
import Tttest from "./Tttest";

import ImageGallery from "@Component/Organism/3DGallay/ImageGallery";

const About = () => {
  const [click, setClick] = useState<boolean>(false);

  const imageArr: string[] = [
    "gray",
    "green",
    "blue",
    "yellow",
    "pink",
    "purple",
  ];

  return (
    <Page>
      <Ttest></Ttest>
      <Test>
        <ImageGallery perspective={800} zAxis={300} reflect={false}>
          {imageArr.map((data, index) => (
            <Div key={index} color={data}>
              {data}
            </Div>
          ))}
        </ImageGallery>
      </Test>
    </Page>
  );
};

const Test = styled.div`
  width: 100%;
  height: 100%;

  /* background-color: blue; */
`;

const Div = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};

  width: 150px;
  height: 150px;

  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 1;
`;

export default About;
