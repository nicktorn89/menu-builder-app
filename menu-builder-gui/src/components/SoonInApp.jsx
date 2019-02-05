import React, { Component } from 'react';
import styled, { css } from 'styled-components';

export default function SoonInApp(props) {
    return(
        <SoonContainer fulfilled={props.fulfilled}>
            <SoonPosition>
                {props.position}#
            </SoonPosition>

            <SoonParagraph fulfilled={props.fulfilled}>
                {props.children}
            </SoonParagraph>
        </SoonContainer>
    );
};

const slateGray = '#7d97a0';
const sandBrown = '#f2aa7a';
const fulfilledColor = '#00fa99';

const SoonContainer = styled.div`
    margin: 1rem 0 1rem 1rem;
    border-left: 10em solid ${props => props.fulfilled ? fulfilledColor : slateGray};
`;

const SoonPosition = styled.span`
    font-size: 1.3em;
    margin-left: 1rem;
`;

const SoonParagraph = styled.p`
    padding: .5rem 0 0 1rem;
    font-size: 1.2em;
    text-decoration: ${props => props.fulfilled ? 'line-through' : 'none' };
`;