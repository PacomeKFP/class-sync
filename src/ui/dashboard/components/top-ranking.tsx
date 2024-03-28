export type TopRankingProps = {
	title: string;
	elements: Record<string, number> | Record<string, [string, number]>;
}
export const TopRanking = ({title, elements}: TopRankingProps) => {
	return (<div className="main-information-div-top-category">
		<div className="main-information-div-top-category-header">{title}</div>
		{Object.keys(elements).length === 0 ? 'Aucun élément à afficher' : Object.keys(elements).map((key) =>
			<div
				className="main-information-div-top-category-content">
				<div>{key}</div>

				{
					typeof elements[key] === 'number'
						? <div className="main-information-div-top-category-content-value">{elements[key]}</div>
						: <>
							<div className="main-information-div-top-category-content-value">
								{(elements[key] as [string, number])[0]}
							</div>
							<div className="main-information-div-top-category-content-value">
								{(elements[key] as [string, number])[1]}
							</div>
						</>
				}
			</div>)}
	</div>);
}

export default TopRanking;