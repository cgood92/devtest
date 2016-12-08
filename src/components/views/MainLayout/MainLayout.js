import React from 'react'

import Nav from '../Nav/Nav.js';

export default function(props) {
	const { activePage } = props;
    return (
    <div>
        <Nav activePage={activePage}/> 
        { props.children } 
    </div>
    );
}
