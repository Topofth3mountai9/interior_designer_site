import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Hamburger from './Hamburger.component';
import { nav_links } from '../data';

const NavBarContainer = styled.div`
  padding-block: 4rem;

  .rectangle {
    position: fixed;
    width: 70rem;
    height: 40rem;
    border: 0.1rem solid rgba(255, 255, 255, 0.1);
  }

  .rectangle_1 {
    top: 48%;
    left: -21%;
    transform: rotateZ(20deg);
  }
  .rectangle_2 {
    top: 8%;
    right: -10%;
    transform: rotateZ(60deg);
  }

  .hamburger_menu {
    z-index: 1000;
    //   gap:.8rem;
    position: fixed;
    top: 6.8rem;
    right: 8rem;
  }
  @media all and (width <= 700px) {
    .hamburger_menu {
      top: 6.1rem;
      right: 4rem;
    }
  }
`;

const Logo_and_text = styled.div`
  gap: 1rem;
  .logo_img_wrapper {
    width: 6rem;
    height: 6rem;
    border-radius: ${({ theme }) => theme.border_radius.pill};

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: ${({ theme }) => theme.border_radius.pill};
    }
  }

  .logo_text {
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    .name {
      line-height: 1;
      font-weight: bold;
      /* font-size: ${({ theme }) => theme.typography.heading}; */
    }

    .occupation {
      color: ${({ theme }) => theme.colors.grey.dark};
      line-height: 1.1;
      font-weight: 600;
    }
  }
`;

const SideNav = styled.div`
  background: ${({ theme }) => theme.colors.unknown_colors.body_bg};
  grid-template-columns: 0.4fr 1fr;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  transform: ${({ is_nav_open }) =>
    is_nav_open ? 'translateX(0)' : 'translateX(-300%)'};
  //ensuring its on top of everything else
  z-index: 10;
  transition: transform 0.3s ease-in-out;

  @media all and (width <= 700px) {
    grid-template-columns: 1fr;
  }
`;

const SideNavBg = styled.div`
  .side_nav_img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media all and (width <= 700px) {
    grid-template-columns: 1fr;

    display: none;
  }
`;

const SideBarLinks = styled.ul`
  padding-top: 20rem;
  h2 {
    text-transform: uppercase;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.grey[700]};
  }
  .sidebar_individual_link {
    &:hover {
      .link_label {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  .link_label {
    text-transform: capitalize;
  }
`;

function Nav_bar() {
  const [is_nav_open, set_is_nav_open] = useState(false);

  const handle_nav_bar = () => set_is_nav_open((prev) => !prev);

  const nav_link_elements = nav_links.map((link) => {
    const { id, label } = link;
    return (
      <li key={id} className="sidebar_individual_link">
        <a href="#!" className="link_label text_large">
          {label}
        </a>
      </li>
    );
  });
  return (
    <>
      <nav id="top_nav">
        <div className="container">
          <NavBarContainer className="flex_items align_middle ">
            <div className="rectangle rectangle_1"></div>
            <div className="rectangle rectangle_2"></div>
            <Logo_and_text className="flex_items align_middle align_horizontal g_ text_center">
              <div className="logo_img_wrapper">
                <img src="/nav/designer.jpg" alt="designer image" />
              </div>
              <div className="logo_text">
                <h5 className="name text_tiny">Jane Doe</h5>
                <h5 className="occupation text_xs">Interior designer</h5>
              </div>
            </Logo_and_text>
            <div className="hamburger_menu item_end" onClick={handle_nav_bar}>
              <Hamburger is_nav_open={is_nav_open} />
            </div>
            <SideNav className="grid" is_nav_open={is_nav_open}>
              <SideNavBg>
                <img
                  src="/nav/nav.jpg"
                  alt="side navbar image"
                  className="side_nav_img"
                />
              </SideNavBg>

              <SideBarLinks className="flex_items flex_column align_middle align_horizonta g_2">
                <h2>Jane Doe</h2>
                {nav_link_elements}
              </SideBarLinks>
            </SideNav>
          </NavBarContainer>
        </div>
      </nav>
    </>
  );
}

export default Nav_bar;
