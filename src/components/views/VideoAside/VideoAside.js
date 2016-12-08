import React from 'react';

export default function(props) {
	const { thumbnail, sources = [], title, subtitle, handlers = {}, active = false } = props;
    return (
        <aside className={"videoAside "+((active) ? 'active' : '')}>
            <figure>
                <div className="playButtonContainer">

                    <video 
                        poster={thumbnail} 
                        onClick={handlers.play} 
                        controls={(active) ? 'controls' : ''} 
                        ref={(video) => { handlers.assignPlayer(video); }}
                    >
                    
                        {sources
                            .map(({src, type}, key) => {
                                return (<source 
                                    src={src} 
                                    type={type} 
                                    key={key}
                                />);
                            })
                        }
                    </video>
                    <span onClick={handlers.play}></span>
                </div>

                <figcaption>
                    {(title) ? <div className="figcaption__title">{title}</div> : null}
                    {(subtitle) ? <div className="figcaption__subtitle">{subtitle}</div> : null}
                </figcaption>
            </figure>
        </aside>
    );
}