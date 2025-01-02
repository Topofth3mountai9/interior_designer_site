import React from 'react';
import styled from 'styled-components';

const SectionBgContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  //   transform: translateX(-50%);
  h1 {
    font-family: ${({ theme }) => theme.typography.fonts.secondary};
    text-transform: uppercase;
    line-height: 0.7;
    color: ${({ theme }) => theme.colors.black.base};
  }

  @media all and (width < 800px) {
    /* left: -19px; */
    top: 1rem;

    h1 {
      font-size: ${({ theme }) => theme.typography.heading.xxl};
    }
  }
  @media all and (width < 700px) {
    /* left: -19px; */
    left: 11.5rem;
  }
  @media all and (width < 500px) {
    /* left: -19px; */
    left: -0.5rem;
  }
`;

function Section_bg_heading({ heading }) {
  return (
    <SectionBgContainer>
      <h1 className="heading_biggest">{heading}</h1>
    </SectionBgContainer>
  );
}

export default Section_bg_heading;
