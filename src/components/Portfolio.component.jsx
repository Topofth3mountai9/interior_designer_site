import React from 'react';
import Section_header from './Section_header.component';
import { my_projects } from '../data';
import styled from 'styled-components';
import { HiArrowRight } from 'react-icons/hi2';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Reveal } from './Reveal.component';

const AllPortFolioContainer = styled.section`
  width: 100%;
  .my_projects {
    width: 75%;
    margin-inline: auto;
    gap: 12rem;
  }
`;
const PortFolioContainer = styled.div`
  gap: 8rem;
  .project_img {
    /* order: ${({ img_first }) => (img_first ? 0 : 1)}; */
    height: 30rem;
    width: 40%;
    object-fit: cover;
  }
  flex-direction: ${({ img_first }) => (img_first ? 'row' : 'row-reverse')};

  @media all and (width <= 700px) {
    .project_img {
      width: 100%;
    }
  }
`;

const ProjectLeftContainer = styled.div`
  /*order: ${({ img_first }) => (img_first ? 1 : 0)}; */

  h5,
  p {
    color: ${({ theme }) => theme.colors.grey.great};
  }

  h5 {
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }
  h3 {
    margin-block: 3rem 2rem;
  }
  p {
    color: ${({ theme }) => theme.colors.grey.great};
    margin-bottom: 1.5rem;
  }

  .view_btn {
    a {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
    }
    .arrow_right_svg {
      transition: all 0.3s ease;
      color: ${({ theme }) => theme.colors.grey[0]};
    }
    &:hover {
      .arrow_right_svg {
        margin-left: 3rem;
      }
    }
  }

  @media all and (width <= 700px) {
    display: none;
  }
`;
function Portfolio() {
  const project_elements = my_projects.map((project, index) => {
    const { id, label, title, paragraph, img } = project;
    const img_first = index % 2 === 0;
    return (
      <PortFolioContainer
        key={id}
        className="flex_items align_middle g_6"
        img_first={img_first}
      >
        <img src={img} alt={`project image ${index}`} className="project_img" />
        <ProjectLeftContainer>
          <h5>{label}</h5>
          <h3>{title}</h3>
          <p className="text_xs">{paragraph}</p>
          <div className="view_btn flex_items align_middle g_1">
            <a href="#!" className="text_xs">
              View project
            </a>{' '}
            <span className="arrow_right_svg flex_items align_middle align_horizontal">
              <HiOutlineArrowRight />
            </span>
          </div>
        </ProjectLeftContainer>
      </PortFolioContainer>
    );
  });
  return (
    <Reveal width="100%" threshold={0.2}>
      <AllPortFolioContainer className="mb_144">
        <div className="container">
          <div className="portfolio_content">
            <Section_header h5="portfolio" h2="Checkout my work" />
            <div className="my_projects flex_items flex_column g_6">
              {project_elements}
            </div>
          </div>
        </div>
      </AllPortFolioContainer>
    </Reveal>
  );
}

export default Portfolio;
