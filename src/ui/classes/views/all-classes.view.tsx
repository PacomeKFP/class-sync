import {Link} from 'react-router-dom';
import {AddCard} from '../../../shared/components/cards/add-card.tsx';
import {Card} from '../../../shared/components/cards/Card';

export default function AllClassesView() {
	return (
		<>
			<h1>Toutes les classes</h1>
			<div className="main-skills">
				<div className="main-top">

				</div>
				<Link to={'new'}><AddCard/></Link>
				<Card/>
				<Card/>
				<Card/>
			</div>
		</>
	);
}
