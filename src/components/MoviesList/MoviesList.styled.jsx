import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;

export const MovieItem = styled.li`
  padding: ${p => p.theme.space[3]}px;
  /* width: 260px;
  height: 350px; */
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const MovieImage = styled.img`
  margin-bottom: ${p => p.theme.space[4]}px;
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
export const MovieTitle = styled.h2``;

export const Linka = styled(Link)`
  text-decoration: none;
  color: black;
`;
