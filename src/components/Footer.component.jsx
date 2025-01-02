import React from 'react';
import styled from 'styled-components';
import Container from './Container.component';

const FooterContainer = styled.footer`
  padding-block: 3rem;
  border-top: 0.1rem solid #444;
  color: ${({ theme }) => theme.colors.grey[300]};
`;

const FooterContent = styled.div`
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer className="flex_items align_middle align_horizontal">
      <Container>
        <FooterContent>
          <p className="text_xs">
            Copyright &copy; 2024. All Rights Reserved | Made By{' '}
            <span className="text_primary text_tiny">Topofthemountain</span>
          </p>
        </FooterContent>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
