import React from "react";
import { ReactComponent as SearchIcon } from "../assets/search-icon.svg";
import styled from "styled-components";

const Search = () => {
  return (
    <StyledWrapper>
      <input type="search" placeholder="Search a album of your choice" />
      <button>
        <SearchIcon />
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & input {
    width: 568px;
    height: 48px;
    background-color: #ffffff;
    border-radius: 8px 0px 0px 8px;
    border: 1px solid #121212;
  }
  ::placeholder {
    color: #121212;
    line-height: 19.2px;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.2px;
    padding-left: 12px;
  }
  & button {
    width: 66px;
    height: 48px;
    background-color: #ffffff;
    border-radius: 0px 8px 8px 0px;
    border: 1px solid #121212;
  }
`;

export default Search;
