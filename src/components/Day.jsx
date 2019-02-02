import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Day({ dayHeading, mainDish, subDish, onClick}) {
    return(
        <DayContainer>
            <DayHeading>
                {dayHeading}
            </DayHeading>

            <MainDishContainer>
                <span>{mainDish}</span>
                <DayButton onClick={onClick}>
                    <FontAwesomeIcon style={{marginLeft: 5}} icon='redo'/> 
                </DayButton>
            </MainDishContainer>

            <SubDishContainer>
                <span>{subDish}</span>
                <DayButton onClick={onClick}>
                    <FontAwesomeIcon style={{marginLeft: 5}} icon='redo'/> 
                </DayButton>
            </SubDishContainer>
        </DayContainer>
    );
};

const slateGray = '#7d97a0';
const peru = '#c28a5d';
const sandBrownTransparent = '#f2aa7a80';
const darkSlate = '#121514';

const DayButton = styled(Button)`
    width: 1em;
    color: black;
    border: none;
    
    &:hover {
        background-color: transparent;
    }
`;

const DayContainer = styled.div`
    display: flex;
    padding: 2rem 0;
    flex-direction: column;
`;

const DayHeading = styled.h2`
    text-align: center;
    background-color: ${peru};
    color: ${darkSlate};
    border-radius: 2rem 2rem 0 0;
    padding: 1rem 0;
`;

const MainDishContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    border: 2px solid ${peru};
    border-bottom: none;
    background-color: ${sandBrownTransparent};
`;

const SubDishContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    border: 2px solid ${peru};
    border-top: none;
    background-color: ${sandBrownTransparent};
`;