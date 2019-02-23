import React from 'react';
import styled from 'styled-components';

export default function PageContainer({className, children}) {
    return (
        <ContainerDiv className={className}>
            {children}
         </ContainerDiv>
    );
};

const ContainerDiv = styled.div`
    height: 89vh;
    padding: 1vh 2em;
    background-color: ${props => props.theme.lightSteel};
`;