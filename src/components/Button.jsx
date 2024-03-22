import React from "react";
import styled from "styled-components";

export const Button = ({ title }) => (
  <div style={{ width: "170px", height: "47px", marginRight: "32px" }}>
    <StyledButton>{title}</StyledButton>
  </div>
);

const StyledButton = styled.button`
  font-family: "Poppins";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #121212;
  color: #34c94b;
  padding: 10px 16px;
  border: 1px solid #121212;
  border-radius: 12px;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.25px;
  &:hover {
    cursor: pointer;
  }
`;
