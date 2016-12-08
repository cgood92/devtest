import React from 'react';

import Hero from '../../containers/HeroContainer/HeroContainer.js';

export default function(props) {
	const { title, subtitle, hero } = props;
    return (
        <section className="article__header">
            <header>
                <h2>{subtitle}</h2>
                <h1 itemProp="headline">{title}</h1>
                <Hero {...hero}/>
            </header>
        </section>
    );
}