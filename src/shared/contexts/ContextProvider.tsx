import {UserContextProvider} from './user-context/user.context.tsx';

export default function ContextsProvider({children}: { children: React.ReactNode }) {
//  return <>{children}</>;

	return (
		<UserContextProvider>
			{children}
			{/* <FilterContextProvider>{children}</FilterContextProvider>; */}
		</UserContextProvider>
	);
}
