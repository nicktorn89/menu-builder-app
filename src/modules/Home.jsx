import React, { Component, Fragment } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header home={ true } />
                <LinksContainer>
                    <StyledLink to="/about">
                        <StyledButtonLink>About</StyledButtonLink>
                    </StyledLink>

                    <StyledLink to="/build-menu">
                        <StyledButtonLink>Build menu</StyledButtonLink>
                    </StyledLink>

                    <StyledLink to="/add-dish">
                        <StyledButtonLink>Add new dish</StyledButtonLink>
                    </StyledLink>
                    
                    <StyledLink to="/food-store">
                        <StyledButtonLink>Store with food</StyledButtonLink>
                    </StyledLink>
                    
                    <StyledLink to="/budget-settings">
                        <StyledButtonLink>Budget</StyledButtonLink>
                    </StyledLink>
                </LinksContainer>
            </Fragment>
        );
    }
}

const sandBrown = '#f2aa7a';
const peru = '#c28a5d';
const darkSlate = '#121514';
const lightSteel = '#d9dfe1';
const slateGray = '#7d97a0';

const LinksContainer = styled.div`
    height: 89vh;
    padding: 1vh 2em;
    
    display: grid;
	grid-template-columns: repeat(5, 1fr);
    grid-gap: 2em;
    align-items: flex-start;
    background-color: ${lightSteel};
`;

const StyledLink = styled(Link)`
    display: block;
    background-color: ${lightSteel};
    border: 2px solid ${sandBrown};
    border-radius: 2em;
    padding: 7vh 0;
    text-decoration: none;
    color: ${slateGray};

    &:hover {
        background-color: ${sandBrown};
    }
`;

const StyledButtonLink = styled.div`
    text-align: center;
    padding: 2em 0;
    color: ${darkSlate};
`;