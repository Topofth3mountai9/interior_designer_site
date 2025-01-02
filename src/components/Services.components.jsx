import React from 'react';
import { my_services } from '../data';
import styled from 'styled-components';
import Section_bg_heading from './Section_bg_heading.component';
import Section_header from './Section_header.component';
import { Reveal } from './Reveal.component';

const ServicesContainer = styled.section`
  height: 100vh;
  width: 100%;

  .feature_boxes {
    grid-template-columns: repeat(3, 1fr);
    width: 80%;
    margin-inline: auto;
  }

  .feature_box_container {
    text-align: center;
    text-transform: capitalize;
  }

  .actual_services {
    color: ${({ theme }) => theme.colors.grey[0]};
  }

  @media all and (width <= 700px) {
    .feature_boxes {
      grid-template-columns: 1fr;
      gap: 6.4rem;
    }
  }
`;

const StyledIcon = styled.div`
  color: ${({ icon_color, theme }) =>
    icon_color === 'primary'
      ? theme.colors.primary
      : theme.colors.grey.great || theme.colors.grey.dark};
  /* width: 4rem;
  height: 4rem; */

  svg {
    width: 4rem;
    height: 4rem;
  }
`;

function Services() {
  const feature_box_elements = my_services.map((service) => {
    const { id, icon, individual_services } = service;

    const service_elements = individual_services.map(
      (actual_service, index) => <h5 key={index}>{actual_service}</h5>
    );
    return (
      <div
        key={id}
        className="feature_box_container flex_items flex_column align_middle"
      >
        <StyledIcon icon_color="primary" className="mb_32">
          {icon}
        </StyledIcon>
        <div className="actual_services flex_items flex_column g_1">
          {service_elements}
        </div>
      </div>
    );
  });

  return (
    <Reveal width="100%">
      <ServicesContainer className="flex_items align_middle align_horizontal mb_144">
        <div className="container">
          <div className="services_content">
            <Section_header h5="What I do" h2="My services" />
            <div className="feature_boxes grid">{feature_box_elements}</div>
          </div>
        </div>
      </ServicesContainer>
    </Reveal>
  );
}

export default Services;
