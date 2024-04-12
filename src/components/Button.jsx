import React from "react";
import "./Button.css";
import styled from "styled-components";

export const Button = ({ title }) => (
  <StyledButtonWrapper>
    <button className="feedback_button">{title}</button>
  </StyledButtonWrapper>
);


const StyledButtonWrapper = styled.div`
  width: 170px;
  height: 47px;
  margin-right: 32px;
  &:hover {
    cursor: pointer;
  }
`