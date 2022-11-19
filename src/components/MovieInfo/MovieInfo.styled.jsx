import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const WrapSpinner = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const CustP = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const CustLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  &:hover,
  &:hover {
    color: orangered;
  }

  &.active {
    color: #ff6b08;
  }
`;

export const BackButton = styled.button`
  border-radius: 6px;
  padding: 7px 10px;
  border: transparent;
  outline: none;
  margin-left: 10px;
  font-weight: 600;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #ff6b08;
  color: #ffffffdd;
  text-decoration: none;

  &:hover,
  &:hover {
    background-color: orangered;
    color: white;
  }
`;
