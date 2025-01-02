import React from 'react';
import Container from './Container.component';
import Section_header from './Section_header.component';
import { achievement_stats } from '../data';
import styled from 'styled-components';
import { NumberCounter } from './NumberCounter';
import { Reveal } from './Reveal.component';
import AnimatedNumberCustomOnce from './AnimatedNumber';

const AchievementsContainer = styled.section`
  width: 100%;
  min-height: 100vh;
`;

const AchievementsContent = styled.div``;

const Stats = styled.div`
  /* position: relative; */
  grid-template-columns: repeat(${achievement_stats.length}, 1fr);
  grid-template-rows: repeat(${achievement_stats.length}, 1fr);
  grid-auto-rows: 1fr;
  grid-auto-flow: row;
  gap: 8rem;
  column-gap: 0;
  /* width: 80%; */
  margin-inline: auto;

  @media all and (width <= 700px) {
    width: 90%;
  }
  @media all and (width <= 500px) {
    /* width: 90%; */
  }
`;

const Stat = styled.div`
  text-align: start;
  align-items: flex-start;

  h5 {
    color: ${({ theme }) => theme.colors.grey.great};
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-weight: 400;
  }

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.typography.fonts.secondary};
    letter-spacing: 0.1rem;
    /* font-weight: 600; */
  }

  /* grid-row: 2 / span 1;
  grid-column: 2/ span 1; */

  grid-row: ${({ index }) => index + 1} / span 1;
  grid-column: ${({ index }) => index + 1} / span 1;

  /* position: absolute;
  top: ; */
`;

function Achievements() {
  const stat_elements = achievement_stats.map((stat, index) => {
    const { id, label, num } = stat;
    return (
      <Stat key={id} index={index} className="flex_items flex_column">
        <h5 className="text_small mb_32">{label}</h5>
        <Reveal width="100%">
          {/* <NumberCounter to={num} duration={4} /> */}
          <AnimatedNumberCustomOnce end={num} className="s" />
        </Reveal>
        {/* <h2 className="heading_biggest">{num}</h2> */}
      </Stat>
    );
  });
  return (
    <Reveal width="100%">
      <AchievementsContainer className="flex_items align_middle">
        <Container>
          <AchievementsContent>
            <Section_header
              h5="achievements"
              h2="Let's share my achievements"
            />
            <Stats className="grid">{stat_elements}</Stats>
          </AchievementsContent>
        </Container>
      </AchievementsContainer>
    </Reveal>
  );
}

export default Achievements;
