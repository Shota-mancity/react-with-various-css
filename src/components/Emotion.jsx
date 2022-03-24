/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const Button=styled.button`
  padding: 8px;
  border-radius: 8px;
  border: none;
  background-color: #abdee8;
  &:hover {
    background-color: #3d84a8;
    color: #fff;
    cursor: pointer;
  }
`
// styled components記法

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
//   通常のcss記法
  const textStyle = css({
    margin: "0",
    color: "#3d84a8"
  });
//   inline-style記法

  return (
    <>
      <div css={containerStyle}>
        <p css={textStyle}>---Emotion---</p>
        <Button>FIGHT!</Button>
      </div>
    </>
  );
};
