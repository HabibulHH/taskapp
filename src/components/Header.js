import React from "react";

import styled from "styled-components";

const HeaderDiv = styled.div`
  height: 40px;
  background: #235656;
  display: grid;
`;

const Name = styled.div`
  font-size: 20px;
  color: white;
  text-align: left;
  margin: 5px 0 0 2px;
`;

function Header() {
  return (
    <HeaderDiv>
      <Name>Task list</Name>
    </HeaderDiv>
  );
}

export default Header;
