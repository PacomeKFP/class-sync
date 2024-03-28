import {Link} from 'react-router-dom';

export const Card = () => {


	return <div className="cards">
		<i className="fas fa-laptop-code"></i>
		<h3> Classe A</h3>
		<div className="cards-info">
			<div> 25 étudiants</div>
		</div>
		<div><i className={'fas fa-user'}></i> Dr. Epah</div>
		<div className="cards-actions">


			<Link to={"classId"}>
				<button> Consulter</button>
			</Link>
		</div>

	</div>

}