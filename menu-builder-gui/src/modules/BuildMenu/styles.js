import styled from 'styled-components';

import images from '../../images/images';

import PageContainer from '../../components/PageContainer';
import Button from '../../components/Button';

export const BuildMenuContainer = styled(PageContainer)`
  height: 90vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  justify-content: center;
  align-content: flex-start;
  background: url(${images()[0]});
  background-size: cover;
`;

export const BuildMenuButton = styled(Button)`
  width: 10em;
  padding: 1em 0;
  align-self: center;
  justify-self: center;
  background-color: ${props => props.theme.sandBrownTransparent};
`;