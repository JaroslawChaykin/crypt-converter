import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import chart from '../../assets/images/chart-icon.svg';
import portfolio from '../../assets/images/portfolio-icon.svg';

const MainNav = styled.nav`
  display: flex;
  position: fixed;
  flex-direction: column;
  row-gap: 20px;
  width: 250px;
  min-height: 100vh;
  background: var(--bg-color);
  padding: 40px;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 768px) {
    width: auto;
    padding: 40px 15px;
  }
  a {
    display: flex;
    align-items: center;
    color: var(--second-text-color);
    border-radius: 5px;
    text-decoration: none;
    padding: 4px 8px;
    width: 100%;
    height: 100%;
    span {
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
    &:hover {
      background: var(--bg-second-color);
    }
    &.active {
      background: var(--bg-second-color);
      color: #fff;
    }
  }
  img {
    height: 18px;
    padding-right: 10px;
    margin-left: 8px;
  }
`

const Navbar = () => {
    return (
      <MainNav>
          <NavLink to={'/'}>
              <img src={chart} alt={'icon-chart'}/>
              <span>Overview</span>
          </NavLink>
          <NavLink to={'/portfolio'}>
              <img src={portfolio} alt={'icon-portfolio'}/>
              <span>Portfolio</span>
          </NavLink>
      </MainNav>
    );
};

export default Navbar;