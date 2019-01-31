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
                    Go to home page 
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
    background-color: #7d97a0;
    border-bottom: 1px solid #d9dfe1;
`;

const MainHeading = styled.h1`
    font-size: 2rem;
`;

const HeaderLink = styled(Link)`
    margin-left: 1em;
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
`;