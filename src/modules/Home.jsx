import React, { Component, Fragment } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allLinks: [
                '/about', '/build-menu',
                '/add-dish', '/food-store',
                '/budget-settings',
            ],
            allTitles: [
                'About', 'Build menu',
                'Add new dish', 'Store with food',
                'Budget'],
        };
    }

    render() {
        const { allLinks, allTitles } = this.state;
        
        const showLinks = allLinks.map((key, index) => (
            <StyledLink key={index} to={key}>
                <StyledButtonLink>{allTitles[index]}</StyledButtonLink>
            </StyledLink>
        ));

        return (
            <Fragment>
                <Header home={ true } />
                <LinksContainer>
                    {showLinks}
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
    @import url('https://fonts.googleapis.com/css?family=Cuprum');

    font-family: 'Cuprum', sans-serif;
    font-size: 1.5em;
    text-align: center;
    padding: 2em 0;
    color: ${darkSlate};
`;