import React from 'react';

import styled from 'styled-components';

import Card from '../card/Card';

const Container = styled.main`
    width: 100%;
    padding: 18px 3%;
    background: linear-gradient( #25A18E,#9FFFCB, #7AE582);
    padding-top: 100px;
`

function Main() {
    return (
        <Container>
            <Card />
        </Container>
    );
}

export default Main;