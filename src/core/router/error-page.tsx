import React from 'react';
import {Link, useRouteError} from 'react-router-dom';
import './error-page.css'

export default function ErrorPage(): React.ReactNode {
	const error = useRouteError() as { statusText: string; message: string };
	console.error(error);


	return (
		<div id="error-page">
			<h1>Oops!</h1>

			<p>Désolé, une erreur est survenue</p>
			<p>
				{error.statusText || error.message}
			</p>
			<Link to="/" className="safe-return">
				Revenir en lieu sûr
			</Link>
		</div>
	);
}
