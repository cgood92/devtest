import React from 'react';

export default function(props) {
	const { title, img, subtitle, tiles = [], handlers, loading = false } = props;
    return (
        <figure className="article__header__figure">
            <img 
                src={img} 
                itemProp="image" 
                id="mainHero" 
                onLoad={handlers.imgLoading} 
                className={(loading) ? 'loading' : null}
            />
            
            <figcaption>
                <div className="figcaption__title">{title}</div>
                <div className="figcaption__subtitle">{subtitle}</div>
            </figcaption><div className="article__header__thumbnailContainer">

            {tiles
                .map((tile, key) => {
                    return (<figure key={key}>
                        <img 
                            src={tile.thumbnail} 
                            onClick={handlers.swap(tile.full)}
                        />
                    </figure>);
                })
            }
            </div>
        </figure>
    );
}