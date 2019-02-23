import React, { Fragment} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    DayButton, DayContainer, DayHeading,
    MainDishContainer, SubDishContainer
} from './styles';

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