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

const LinksContainer = styled.div`
    display: grid;
    height: 93vh;
	background-color: #d9dfe1;

	grid-template-columns: repeat(5, 1fr);
    grid-gap: 2em;
    align-items: flex-start;
`;

const StyledLink = styled(Link)`
    display: block;
    background-color: #d9dfe1;
    border: 2px solid #f2aa7a;
    text-decoration: none;
    color: black;
`;

const StyledButtonLink = styled.div`
    text-align: center;
    padding: 2em 0;
    color: black;
`;