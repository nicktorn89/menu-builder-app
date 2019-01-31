import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export default function PageContainer(props) {
    return (
        <ContainerDiv>
            {props.children}
         </ContainerDiv>
    );
};
const lightSteel = '#d9dfe1';

const ContainerDiv = styled.div`
    height: 89vh;
    padding: 1vh 2em;
    background-color: ${lightSteel};
`;