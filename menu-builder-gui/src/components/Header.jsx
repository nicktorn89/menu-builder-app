import React, { Component } from 'react';
import styled, { css } from 'styled-components';
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

const sandBrown = '#f2aa7a';
const peru = '#c28a5d';
const darkSlate = '#121514';
const lightSteel = '#d9dfe1';
const slateGray = '#7d97a0';

const HeaderContainer = styled.header`
    padding: 3.5vh 0 3.5vh 1em;
    background-color: ${slateGray};
    border-bottom: 1px solid ${lightSteel};
`;

const MainHeading = styled.h1`
    @import url('https://fonts.googleapis.com/css?family=Montserrat+Alternates');
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 2rem;
`;

const HeaderLink = styled(Link)`
    margin-left: 1em;
    text-decoration: none;
    color: ${darkSlate};
    font-size: 1.2rem;
    transition-property: color, font-weight;
    transition-duration: 0.3s;

    &:hover {
        color: ${sandBrown};
        font-weight: 900;
    }
`;