import React from 'react';
import styled from 'styled-components';

const SectionHeaderContainer = styled.div`
  text-align: center;
  letter-spacing: 0.2rem;
  margin-block-end: 9.6rem;
  padding-inline-start: 2rem;
  h5 {
    color: ${({ theme }) => theme.colors.grey.great};
    text-transform: uppercase;
    margin-block-end: 1.5rem;
    /* font-weight: 600; */
  }
  h2 {
    text-transform: capitalize;
    font-weight: 700;
  }
`;

function Section_header({ h5, h2 }) {
  return (
    <SectionHeaderContainer>
      <h5>{h5}</h5>
      <h2>{h2}</h2>
    </SectionHeaderContainer>
  );
}

export default Section_header;
