import styled from 'styled-components';

// export const Item = styled('li')`
//   margin-top: ${p => p.theme.space[4]}px;
// `;

export const Paragraf = styled('p')`
  margin-top: ${p => p.theme.space[1]}px;
  font-size: ${p => p.theme.fontSizes.s}px;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: start;
`;

export const Section = styled.section`
  padding: 15px 0;
`;

export const List = styled.ul`
  padding: 4px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  background-color: #ff990030;
`;
