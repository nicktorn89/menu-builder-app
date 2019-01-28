import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <LinksContainer>
                <Link to="/about"><span style={{color: 'red'}}>About</span></Link>
                <Link to="/build-menu">Build menu</Link>
                <Link to="/add-dish">Add new dish</Link>
                <Link to="/food-store">Store with food!</Link>
                <Link to="/budget-settings">Budget</Link>
            </LinksContainer>
        );
    }
}

const LinksContainer = styled.div`
	display: grid;
	background-color: #80808a66;

	grid-template-columns: repeat(2, 1fr);
`;