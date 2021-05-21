import React from "react";
import styled from "styled-components";

function Home() {
  return <Container>Home</Container>;
}

export default Home;

const Container = styled.main`
  min-height: calc(
    100vh - 70px
  ); // 100 vertical height: full height from top to bottom of the view height off the page (adapting to screen size: pc, phone, ipad, etc.) - 70px (header)
  padding: 0 calc(3.5vw + 5px);
  positon: relative;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1; // z-index: -1 lets you add conent to the background
  }
`;

// 100 vertical height: full height from top to bottom of the view height off the page (adapting to screen size: pc, phone, ipad, etc.) - 70px (header);
