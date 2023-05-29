import { preLoaderAnim } from "components/animations";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledPreLoad = styled.div`
  height: 100vh;
  width: 100%;
  background: black;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden !important;
  .texts-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    /* width: 400px; */
    font-size: 50px;
    font-weight: 800;
    overflow: hidden;
    color: white;
  }
  .texts-container span {
    margin-right: 20px;
  }
`;

export const Skeleton = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <StyledPreLoad>
      <div className="texts-container">
        <span>Chào mừng </span>
        <span> các bạn </span>
        <span> đến với</span>
        <span> PROJECT</span>
        <span> của mình</span>
      </div>
    </StyledPreLoad>
  );
};
