import {NavLink} from 'react-router-dom';

export default function ClassInfoView() {
	return (
		<>
			<h1>Nom de la classe ici</h1>
			<div className="main-skills">
				<div className="main-top">
					<ul>
						<li><NavLink to={''}>Informations générales </NavLink></li>
						<li><NavLink to={'students'}>Etudiants </NavLink></li>
					</ul>
				</div>
				Informations  sur une classe
			</div>
		</>
	);
}
