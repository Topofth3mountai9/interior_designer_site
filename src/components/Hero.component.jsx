import React from 'react';
import styled from 'styled-components';
import Fade from './Fade.component';

const HeroContainer = styled.section`
  //   align-self: center;
  width: 100%;
  height: 100%;
`;

const HeroContent = styled.div`
  //   height: 100vh;

  h4 {
    color: ${({ theme }) => theme.colors.grey.dark};
  }
  .greeting_and_name,
  .occupation_and_location {
    text-transform: uppercase;
  }

  .greeting_and_name {
    letter-spacing: 0.2rem;

    h4 {
      margin-bottom: 1.5rem;
    }
  }

  .occupation_and_location {
    h2 {
      font-size: ${({ theme }) => theme.typography.heading.title};
    }
  }

  @media all and (width <= 500px) {
    .occupation_and_location {
      h2 {
        font-size: ${({ theme }) => theme.typography.heading.one};
        line-height: 1;
      }
    }
  }
`;

function Hero() {
  return (
    <HeroContainer>
      <div className="container">
        <HeroContent className="flex_items align_middle align_horizontal">
          <Fade interval={300000000}>
            {/*<div className="greeting_and_name">
              <h4>Hello, I am </h4>
              <h2 className="heading_title">Jane Doe</h2>
            </div> */}
            <div className="occupation_and_location">
              <h4>I'm from Cairo</h4>
              <h2 className="heading_titl">An interior designer</h2>
            </div>
          </Fade>
        </HeroContent>
      </div>
    </HeroContainer>
  );
}

export default Hero;
