import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Linka = styled(NavLink)`
  margin-right: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover,
  &:hover {
    color: orangered;
  }

  &.active {
    color: white;
    background-color: orangered;
  }
`;
