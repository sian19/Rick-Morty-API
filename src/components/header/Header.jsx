import React from 'react';

import styled from 'styled-components';
import './header.css';

const Title = styled.header`
    width: 100%;
    padding: 15px 2%;
    background-color: #9FFFCB;
    text-align: center;
    font-size: 1.7em;
    position: fixed;
`

function Header() {

    return (
        <Title>
            <h2>The Rick and Morty API
            </h2>
        </Title>
    );
}

export default Header;