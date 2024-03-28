export type StatCardProps = {
	iconPath: string;
	number: number;
	title: string;
}

export const StatCard = ({iconPath, number, title}: StatCardProps) => {
	return (
		<div className="main-top-information-div">
			<img alt={'classroom svg'} src={iconPath} className="main-top-information-logo"/>
			<hr className="hr-rounded"/>
			<div className="main-top-information-div-number">+{number}</div>
			<div className="main-top-information-div-category">{title}</div>
		</div>
	);
}

export default StatCard;
