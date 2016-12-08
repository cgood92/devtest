import React from 'react';

import ArticleHeader from '../ArticleHeader/ArticleHeader.js';
import VideoAside from '../../containers/VideoAsideContainer/VideoAsideContainer.js';

export default function(props) {
	const { title, subtitle, hero = {}, article } = props;
    return (
    	<main itemScope itemType="http://schema.org/Article" className="articlePage">
    		<ArticleHeader 
                title={title} 
                subtitle={subtitle} 
                hero={hero}
            />
            <article itemProp="articleBody">

            {(article.sections || [])
                .map(({title, paragraphs = [], aside}, key) => {
                    // Use this to put the aside halfway down the article
                    const half = (paragraphs.length) ? parseInt(paragraphs.length/2)-1 : 0;
                    return (<section key={key}>
                        {(title) ? <h2>{title}</h2> : null}

                        {paragraphs.splice(0,half).map((p, key) => <p key={key}>{p}</p>)}
                        {(aside) ? <VideoAside {...aside}/> : null}
                        {paragraphs.map((p, key) => <p key={key}>{p}</p>)}
                        
                    </section>);
                })
            }

            </article>
        </main>
    );
}