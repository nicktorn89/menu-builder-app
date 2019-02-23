import styled from 'styled-components';

const sandBrown = '#f2aa7a';

export const DishesBlock = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 1rem;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
`;

export const DishItem = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1rem;
`;

export const DishName = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
`;

export const DishRemove = styled.span`
  font-size: 1.3rem;
  
  &:hover {
    cursor: pointer;
    color: ${sandBrown};
  }
`;

export const DishDate = styled.span`
  font-size: 1.2rem;
`;

export const InputForDishes = styled.input`
  width: 30%;
`;

export const AddBlock = styled.div`
  display: grid;
  grid-gap: 1rem;
  width: 70%;
  margin: 1rem auto 0 auto;
  justify-items: center;
  align-items: center;
`;