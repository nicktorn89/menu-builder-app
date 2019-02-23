import React from 'react';
import styled from 'styled-components';

export default function Message({className, onClick, children}) {
    return(
        <MessageBody className={className} onClick={onClick}>
            <MessageText>{children}</MessageText>
        </MessageBody>
    );
}

const MessageBody = styled.div`
    position: absolute;
    top: 85%;
    left: 85%;
    width: 14rem;
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

const MessageText = styled.span`
    font-size: 1.2rem;
`;