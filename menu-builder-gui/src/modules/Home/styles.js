import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinksContainer = styled.div`
    height: 89vh;
    padding: 1vh 2em;
    
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 2em;
    align-items: flex-start;
    background-color: ${props => props.theme.lightSteel};
`;

export const StyledLink = styled(Link)`
    display: block;
    background-color: ${props => props.theme.lightSteel};
    border: 2px solid ${props => props.theme.sandBrown};
    border-radius: 2em;
    padding: 7vh 0;
    text-decoration: none;
    color: ${props => props.theme.slateGray};

    &:hover {
        background-color: ${props => props.theme.sandBrown};
    }
`;

export const StyledButtonLink = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Cuprum');

    font-family: 'Cuprum', sans-serif;
    font-size: 1.5em;
    text-align: center;
    padding: 2em 0;
    color: ${props => props.theme.darkSlate};
`;