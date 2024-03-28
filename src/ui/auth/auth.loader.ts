import {Params, redirect} from 'react-router-dom';
import {toast} from 'sonner';
import {UserInterface} from '../../core/types/user.interface.ts';
import HttpClient from '../../core/adapters/http-client.ts';

export async function authDataLoader({params}: { params: Readonly<Params<string>> }): Promise<UserInterface> {

	if (!params.email || !params.redirectionUrl)
		redirect('/user-not-found');
	const user = HttpClient.get(`/hand-shake/${params.userMail}`) as Promise<UserInterface>;

	toast.promise(user, {
		loading: 'Authentification en cours',
		success: (data) => {
			console.log(data);
			return `Connecté en tant que ${data.name}`
		},
		error: (error) => `Erreur ${error.name}`,

	})

	return user
}