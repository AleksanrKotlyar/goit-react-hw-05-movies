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

  &.active {
    color: #ff6b08;
  }
`;
