import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

function SelectBox({
  dataArr,
  width,
  selectValue,
  setSelectValue,
  slide,
  fade,
}) {
  const selectRef1 = useRef();
  const selectRef2 = useRef();

  const [click, setClick] = useState(false);

  const select = (e) => {
    setSelectValue(e.target.innerText);
    setClick(!click);
  };

  useEffect(() => {
    const clickOutside = ({ target }) => {
      if (
        click &&
        !selectRef1.current.contains(target) &&
        !selectRef2.current.contains(target)
      )
        setClick(false);
    };

    window.addEventListener("click", clickOutside);
    return () => {
      window.removeEventListener("click", clickOutside);
    };
  }, [click]);

  return (
    <Div width={width} onClick={() => setClick(!click)} ref={selectRef1}>
      {selectValue}

      <Ul
        open={click}
        onChange={select}
        ref={selectRef2}
        slide={slide}
        fade={fade}
      >
        {dataArr.map((item, index) => (
          <React.Fragment key={index}>
            {click && (
              <Li onClick={select}>
                {item}
              </Li>
            )}
          </React.Fragment>
        ))}
      </Ul>
    </Div>
  );
}

const Div = styled.div`
  width: ${(props) => props.width};

  padding: 0.5rem;
  margin: 0.3rem;
  font-size: 1rem;

  background-color: white;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.2s;

  &:hover {
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`;

const Ul = styled.ul`
  width: 100%;
  padding: 0px;

  position: absolute;
  top: calc(100% + 10px);

  background-color: white;
  border: none;
  list-style: none;
  border-radius: 3px;

  box-shadow: ${(props) =>
    props.open ? "0px 0px 10px 0px rgba(0, 0, 0, 0.1)" : "none"};
  transition: 0.3s;
  overflow-y: scroll;

  ${(props) =>
    props.slide &&
    css`
      max-height: ${(props) => (props.open ? "15rem" : "0px")};
    `}

  ${(props) =>
    props.fade &&
    css`
      opacity: ${(props) => (props.open ? "1" : "0")};
      max-height: 15rem;
    `}
  &::-webkit-scrollbar {
    width: 3px;
  }
`;

const Li = styled.li`
  width: 100%;

  padding: 1rem;
  font-size: 1rem;

  color: black;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 0.2s;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export default SelectBox;
