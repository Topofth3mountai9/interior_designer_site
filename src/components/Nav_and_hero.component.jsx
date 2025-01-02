import React from 'react';
import Nav_bar from './nav_bar.component';
import Hero from './Hero.component';
import styled from 'styled-components';

const Nav_and_hero_container = styled.header`
  height: 100vh;
`;

function Nav_and_hero() {
  return (
    <Nav_and_hero_container className="flex_items flex_column">
      <Nav_bar />
      <Hero />
    </Nav_and_hero_container>
  );
}

export default Nav_and_hero;
