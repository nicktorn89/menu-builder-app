import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Header extends Component {
    render() {
        return (
          <HeaderContainer>
           <MainHeading>
                Menu Builder App
                { this.props.home ?
                <i></i> :
                <HeaderLink to="/">
                    Перейти на домашнюю страницу 
                    <FontAwesomeIcon style={{marginLeft: 5}} icon='arrow-left'/> 
                </HeaderLink>
                }
           </MainHeading>
          </HeaderContainer>
        );
    }
};

const HeaderContainer = styled.header`
    padding: 3.5vh 0 3.5vh 1em;
    background-color: ${props => props.theme.slateGray};
    border-bottom: 1px solid ${props => props.theme.lightSteel};
`;

const MainHeading = styled.h1`
    @import url('https://fonts.googleapis.com/css?family=Montserrat+Alternates');
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 2rem;
`;

const HeaderLink = styled(Link)`
    margin-left: 1em;
    text-decoration: none;
    color: ${props => props.theme.darkSlate};
    font-size: 1.2rem;
    transition-property: color, font-weight;
    transition-duration: 0.3s;

    &:hover {
        color: ${props => props.theme.sandBrown};
        font-weight: 900;
    }
`;