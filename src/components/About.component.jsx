import React from 'react';
import Section_bg_heading from './Section_bg_heading.component';
import { social_media_links } from '../data';
import styled from 'styled-components';
import { Reveal } from './Reveal.component';

const AboutContainer = styled.section`
  height: 80vh;
  width: 100%;
  margin-inline: auto;
  .about_content {
    grid-template-columns: 0.5fr 1fr;
    width: 80%;
    margin-inline: auto;
  }

  .about_left {
    padding-inline-start: 10rem;

    .about_paragraph {
      color: ${({ theme }) => theme.colors.grey.great};
      font-family: ${({ theme }) => theme.typography.fonts.secondary};
    }
  }

  .social_media {
    margin-bottom: 4.2rem;
  }

  .about_img_wrapper {
    height: 55rem;

    .about_img {
      height: 100%;
      object-fit: cover;
    }
  }

  .info_about_me {
    justify-content: space-around;
    margin-block-start: 3rem;
    p {
      margin-block: 6rem 5rem;
      width: 70%;
    }
  }

  .contact {
    .first {
      color: ${({ theme }) => theme.colors.grey.great};
      font-weight: 500;
    }
    .second {
      font-family: ${({ theme }) => theme.typography.fonts.secondary};
      font-weight: 600;
    }
  }

  @media all and (width <= 1000px) {
    .about_content {
      grid-template-columns: 0.7fr 1fr;
    }

    .info_about_me {
      p {
        width: 100%;
      }
    }

    .about_left {
      padding-inline-start: 5rem;
    }
  }
  @media all and (width <= 1000px) {
    .about_content {
      grid-template-columns: 0.7fr 1fr;
      width: 90%;
      gap: 4rem;
    }
  }

  @media all and (width <= 700px) {
    .about_img_wrapper {
      display: none;
    }

    .about_left {
      /* width: 100%; */
      padding-inline-start: 0;
    }
    .about_content {
      grid-template-columns: 1fr;
      width: 70%;
      margin-inline: auto;
    }

    .info_about_me {
      align-items: center;
      p {
        width: 70%;
      }
    }
  }
`;

const StyledIcon = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.black.light};
  color: ${({ icon_color, theme }) =>
    icon_color === 'primary'
      ? theme.colors.primary
      : icon_color || theme.colors.grey.great};
`;

function About() {
  const social_media_elements = social_media_links.map((link) => {
    const { id, icon } = link;

    return (
      <StyledIcon
        key={id}
        className="social_media_link flex_items align_middle align_horizontal"
        icon_color="primary"
      >
        {icon}
      </StyledIcon>
    );
  });

  const customAnimation = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { opacity: 1, scale: 1, rotate: 0 },
  };

  return (
    <Reveal
      animation={customAnimation}
      width="100%"
      //   threshold={0.4}
      //   duration={0.5}
    >
      <AboutContainer className="flex_items align_horizontal align_middle">
        <div className="container">
          <div className="about_content grid align_middle g_6">
            <div className="about_img_wrapper">
              <img
                src="/about/about.jpg"
                alt="about image"
                className="about_img"
              />
            </div>
            <div className="about_left  position_relative">
              <Section_bg_heading heading="About" />
              <div className="info_about_me flex_items flex_column">
                <h4 className="text_large">Hi, I'm Jane Doe</h4>
                <p className="about_paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nobis, eos. Iusto necessitatibus quam nemo id eos vero
                  accusantium dolorem amet.
                </p>
                <div className="social_media flex_items g_2">
                  {social_media_elements}
                </div>
                <div className="contact flex_item flex_column g_1">
                  <h5 className="header mb_16">Contact me here:</h5>
                  <div className="email ">
                    <span className="first">Email:</span>{' '}
                    <span className="text_primary second">
                      janedoe@design.co
                    </span>
                  </div>
                  <div className="phone">
                    <span className="first">Phone:</span>{' '}
                    <span className="text_primary second">
                      +254 113 427 160
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AboutContainer>
    </Reveal>
  );
}

export default About;
