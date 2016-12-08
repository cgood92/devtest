import React from 'react';

import { Link } from 'react-router'

export default function(props) {
	const { links = [] } = props;
    return (<main className='homePage'>
    	{links
    		.map(({href, title, img}, key) => {
	    		return (<Link to={href} key={key}>
	    			<figure>
	    				<figcaption>{title}</figcaption>
	    				<img src={img}/>
	    			</figure>
	    		</Link>);
	    	})
    	}
    </main>);
}