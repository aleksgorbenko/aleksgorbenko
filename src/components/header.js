import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Row, Col } from "antd";

const StyledLink = styled(Link)`
  font-size: 22px;
  text-transform: uppercase;
  color: black;
  margin: 10px 0 10px 0;
  padding: 5px;
  text-decoration: none;
  box-shadow: none;
  background-image: none;
`;

const Div = styled.div`
	display: grid;
	ul {
    display: flex;
		justify-content: center;
		a{
			padding: 0 20px;
		}
	}
`;

const Header = () => {
  return (
    <Div>
      <ul>
        <StyledLink to={`/about`} activeStyle={{ color: "red" }}>
          About
        </StyledLink>
        <StyledLink to={`/articles`} activeStyle={{ color: "red" }}>
          Articles
        </StyledLink>
        <StyledLink to={`/photography`} activeStyle={{ color: "red" }}>
          Photography
        </StyledLink>
      </ul>
    </Div>
  );
};

export default Header;
