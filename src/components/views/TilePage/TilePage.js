import React from 'react';

import VideoAside from '../../containers/VideoAsideContainer/VideoAsideContainer.js';

// TODO: Microdata
export default function(props) {
	const { tag, title, description, aside, handlers, active } = props;
    return (
		<main className="tilePage">
		    <section className="tile">

		    	<VideoAside 
		    		{...aside} 
		    		active={active}
		    		handlers={{play: handlers.play}} 
		    	/>

		        <div className={"tile__body"+((active)? ' active' : '')}>
		            <header>
		                <div className="tile__tag">{tag}</div>
		                <div className="tile__title">{title}</div>
		            </header>
		            <p>{description}</p>
		        </div>
		        
		    </section>
		</main>
    );
}