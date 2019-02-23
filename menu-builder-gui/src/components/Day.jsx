import React, { Fragment} from 'react';
import styled from 'styled-components';
import Button from './Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Day({ dayHeading, mainDish, subDish, onClick, index, haveSub }) {
    return(
        <DayContainer>
            <DayHeading>
                {dayHeading}
            </DayHeading>

            <MainDishContainer>
                <span>{mainDish}</span>
                <DayButton className={`main-${index}`} onClick={onClick}>
                    <FontAwesomeIcon style={{marginLeft: 5}} icon='redo'/> 
                </DayButton>
            </MainDishContainer>

            <SubDishContainer>
                {haveSub 
                &&
                <Fragment>
                    <span>{subDish}</span>
                    <DayButton className={`sub-${index}`} onClick={onClick}>
                        <FontAwesomeIcon style={{marginLeft: 5}} icon='redo'/> 
                    </DayButton>
                </Fragment>
                }
            </SubDishContainer>
        </DayContainer>
    );
};

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
    background-color: ${props => props.theme.peru};
    color: ${props => props.theme.darkSlate};
    font-size: 1.5em;
    border-radius: 2rem 2rem 0 0;
    padding: 1rem 0;
`;

const MainDishContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    border: 2px solid ${props => props.theme.peru};
    border-bottom: none;
    background-color: ${props => props.theme.sandBrownTransparent};

    span {
        font-size: 1.3em;
    }
`;

const SubDishContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    height: 8rem;
    border: 2px solid ${props => props.theme.peru};
    border-top: none;
    background-color: ${props => props.theme.sandBrownTransparent};

    span {
        font-size: 1.3em;
    }
`;