import './auth.style.css'
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'sonner';

export default function AuthUI() {

	const navigate = useNavigate();
	const handleFormSubmition = (e: React.SyntheticEvent) => {
		e.preventDefault();
		toast.success("Authentication successful!");
		navigate('/');
	}

	return <section className="main-connexion">
		<div className="connexion-content">
			<h3>Bienvenue !</h3>
			<br/>
			<form className="identification" onSubmit={handleFormSubmition}>

				<div className="input-group">
					<label htmlFor="id-identifiant">Identifiant :</label>
					<input type="text" id="id-identifiant"/>
				</div>
				<div className="input-group">
					<label htmlFor="id-password">Mot de passe : </label>
					<input type="password" id="id-password"/>
				</div>
				<button type={'submit'} className="connect">Se connecter</button>
			</form>
		</div>

	</section>
}