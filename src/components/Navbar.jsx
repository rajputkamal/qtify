import React from "react";
import { Logo } from "./Logo";
import styled from "styled-components";
import { Button } from "./Button";
import Search from "./Search";

const Navbar = () => {
  return (
    <StyledNav>
      <Logo />
      <Search />
      <Button title="Give Feedback" />
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  height: 74px;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  background-color: #34c94b;
`;
export default Navbar;
