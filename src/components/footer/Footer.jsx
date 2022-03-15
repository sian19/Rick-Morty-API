import React from 'react';

import styled from 'styled-components';

import './footer.css';

const Footerr = styled.footer`
    width: 100%;
    padding: 10px 2%;
    background-color:#9FFFCB;
    text-align: center;
`

function Footer() {
    return (
        <Footerr>
            <h3>Sean Taron</h3>
            <h3>Rick API</h3>
        </Footerr>
    );
}

export default Footer;