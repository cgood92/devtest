import React from 'react';

import { Link } from 'react-router'

export default function(props) {
	const { activePage } = props;
    return (
    	<nav className='mainNav'>
    		<ul>
    			<li><Link to="/">Clint Goodman's TeamMoFed Challenge</Link></li>
    			{(activePage) ? <li className="active">{activePage}</li> : null}
    		</ul>
    	</nav>
    );
}