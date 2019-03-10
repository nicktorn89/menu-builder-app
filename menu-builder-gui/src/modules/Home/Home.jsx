import React, { Component, Fragment } from 'react';

import Header from '../../components/Header';
import { LinksContainer, StyledLink, StyledButtonLink } from './styles';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allLinks: [
                '/stats', '/build-menu',
                '/add-dish', '/add-sub-dish', '/food-store',
                '/budget-settings',
            ],
            allTitles: [
                'Статистика', 'Построить меню',
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
};