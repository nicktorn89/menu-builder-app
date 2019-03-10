import styled from 'styled-components';

export const ListContainer = styled.div`
  width: 80%;
  height: 100%;
  padding: 1rem 0;
  display: grid;
  grid-row-gap: 1rem;
  overflow: auto;
  background-color: ${props => props.theme.peru};
  border-radius: 1rem;
`;

export const DishItem = styled.div`
  width: 80rem;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1rem;
  text-align: center;
`;

export const DishName = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
`;

export const DishRemove = styled.span`
  font-size: 1.3rem;
  
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.sandBrown};
  }
`;

export const DishDate = styled.span`
  font-size: 1.2rem;
`;