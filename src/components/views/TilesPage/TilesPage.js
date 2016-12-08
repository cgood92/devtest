import React from 'react';

// TODO: Microdata
export default function(props) {
	const { sections = [] } = props;
    return (
		<main className="tilesPage">
		{sections
			.map(({title, color = 'blue', tiles = []}, key) => {
				return (
					<section key={key}>
						<header>
							<h2 className={`sectionTitle ${color}Border`}>{title}</h2>
						</header>
						{tiles
							.map(({title, description, tag, img}, key) => {
								return (<div key={key} className="tile">
									<img src={img}/>
									<div className="tile__title">{title}</div>
									<div className="tile__description">{description}</div>
									<div className="tile__tag">{tag}</div>
								</div>);
							})
						}
					</section>
				);
			})
		}
		</main>
    );
}