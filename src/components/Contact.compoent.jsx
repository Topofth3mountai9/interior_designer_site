import React from 'react';
import styled from 'styled-components';
import { social_media_links } from '../data';
import Container from './Container.component';

const ContactContainer = styled.section`
  height: 50rem;
  width: 100%;
`;

const ContactContent = styled.div``;
const SocialMedia = styled.div``;

const ContactInfo = styled.div`
  text-align: center;
  h2 {
    color: ${({ theme }) => theme.colors.grey[0]};
  }

  p {
    color: ${({ theme }) => theme.colors.grey[300]};
    letter-spacing: 0.15rem;
  }
`;

const StyledIcon = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${({ theme }) => theme.colors.black.black_400};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.grey.great};
`;

function Contact() {
  const social_media_elements = social_media_links.map((link) => {
    const { id, icon } = link;
    return (
      <StyledIcon key={id} className="flex_items align_middle align_horizontal">
        {icon}
      </StyledIcon>
    );
  });
  return (
    <ContactContainer className="flex_items align_middle align_horizontal">
      <Container>
        <ContactContent className="flex_items flex_column g_1">
          <SocialMedia className="flex_items align_middle align_horizontal g_1">
            {social_media_elements}
          </SocialMedia>
          <ContactInfo>
            <h2 className="text_large">Contact me</h2>
            <p className="email text_small">janedoe@design.co</p>
          </ContactInfo>
        </ContactContent>
      </Container>
    </ContactContainer>
  );
}

export default Contact;
