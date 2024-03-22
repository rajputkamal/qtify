import React from "react";
import qtifyLofo from "../assets/logo.png";
import styled from "styled-components";

export const Logo = () => (
  <StyledLogo>
    <img src={qtifyLofo} alt="qtify-logo" />
  </StyledLogo>
);

const StyledLogo = styled.div`
  padding-left: 32px;
  cursor: pointer;
`;
