import React, {createContext, useState} from 'react';
import {UserInterface} from '../../../core/types/user.interface';
import {UserContextInterface} from './user-context.interface';


const CURRENT_USER_KEY: string = import.meta.env.VITE_CURRENT_USER_KEY || 'currentUser';

export const UserContext = createContext<UserContextInterface>({
	defineCurrentUser: (user: UserInterface) => {
		console.log('UserContext', user);
	}
});

export function UserContextProvider({children}: { children: React.ReactNode }) {

	const [currentUser, setCurrentUser] = useState<UserInterface>();

	//toggle method for User
	const defineCurrentUser = (user: UserInterface) => {
		localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
		setCurrentUser(user);
	};

	return (
		<UserContext.Provider value={{currentUser, defineCurrentUser}}>
			{children}
		</UserContext.Provider>
	);
}

