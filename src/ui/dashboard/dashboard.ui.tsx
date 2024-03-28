import React from 'react'
import classroom from '../../shared/assets/images/classroom.svg';
import teacher from '../../shared/assets/images/teacher.svg';
import student from '../../shared/assets/images/student.svg';
import StatCard from './components/stat-card.tsx';
import TopRanking from './components/top-ranking.tsx';

export default function DashboardUI(): React.JSX.Element {
	return (<>
			<h1><i className="fas fa-home"></i>&nbsp;&nbsp;&nbsp;Accueil</h1>
			<div className="main-skills center-vertical">
				<div className="main-top-all-infos">
					<StatCard iconPath={classroom} number={30} title={'Classes'}/>
					<StatCard iconPath={teacher} number={20} title={'Enseignants'}/>
					<StatCard iconPath={student} number={800} title={'Etudiants'}/>
				</div>

				<div className="main-information-div">
					<h3>Classement hebdomadaire des abscences</h3>

					<div className="main-information-div-content">
						<TopRanking title={'Top classes'} elements={{'3GC': 25, '4GC': 15, '5GC': 25}}/>
						<TopRanking title={'Top enseignants'} elements={{}}/>
						<TopRanking title={'Top étudiants'} elements={{'Igor Green Mogou': ['3GI', 25]}}/>
					</div>
				</div>
			</div>

		</>
	)
		;
}
