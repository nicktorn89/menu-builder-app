import React from 'react';
import styled from 'styled-components';

export default function Button({className, text, onClick, children}) {
    return(
        <ButtonDiv className={className} onClick={onClick}>
            {children}
            <TextButton>{text}</TextButton>
        </ButtonDiv>
    );
}

const ButtonDiv = styled.div`
    width: 10rem;
    padding: 2rem 0;
    cursor: pointer;
    border: 2px solid ${props => props.theme.sandBrown};
    border-radius: 2rem;
    text-align: center;

    &:hover {
        background-color: ${props => props.theme.sandBrown};
        color: ${props => props.theme.darkSlate};
    }
`;

const TextButton = styled.span`
    font-size: 1.2rem;
`;