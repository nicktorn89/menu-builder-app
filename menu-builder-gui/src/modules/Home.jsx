import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allLinks: [
                '/about', '/build-menu',
                '/add-dish', '/add-sub-dish', '/food-store',
                '/budget-settings',
            ],
            allTitles: [
                'О приложении', 'Построить меню',
                'Добавить новое блюдо', 'Добавить доп блюдо',
                'Хранилище', 'Бюджет'],
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

const LinksContainer = styled.div`
    height: 89vh;
    padding: 1vh 2em;
    
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 2em;
    align-items: flex-start;
    background-color: ${props => props.theme.lightSteel};
`;

const StyledLink = styled(Link)`
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

const StyledButtonLink = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Cuprum');

    font-family: 'Cuprum', sans-serif;
    font-size: 1.5em;
    text-align: center;
    padding: 2em 0;
    color: ${props => props.theme.darkSlate};
`;