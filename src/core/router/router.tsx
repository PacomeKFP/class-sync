import {lazy, Suspense} from 'react';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
// import { CenteredContentLoader } from "../../shared/components/content-loader/ContentLoaderTemplates";

const ScreenLayout = lazy(() => import('../../shared/components/screen-layout/ScreenLayout'));
const ErrorPage = lazy(() => import('./error-page'));
const DashboardUI = lazy(() => import('../../ui/dashboard/dashboard.ui'));
const AuthUI = lazy(() => import('../../ui/auth/auth.ui'));

// classes
const ClassesUI = lazy(() => import('../../ui/classes/ClassesUI'));
const AllClassesView = lazy(() => import('../../ui/classes/views/all-classes.view'));
const ClassInfoView = lazy(() => import('../../ui/classes/views/class-info.view'));
const CreateClassView = lazy(() => import('../../ui/classes/views/create-class.view'));
const AddStudentView = lazy(() => import('../../ui/classes/views/add-student.view'));

export default function AppRouter() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <ScreenLayout/>,
			errorElement: <ErrorPage/>,
			children: [
				{
					errorElement: <ErrorPage/>,
					children: [
						{
							path: '',
							element: <DashboardUI/>,
						},
						{
							path: '/classes',
							errorElement: <ErrorPage/>,
							element: <ClassesUI/>,
							children: [
								{
									path: '',
									index: true,
									element: <AllClassesView/>
								},
								{
									path: ':classId',
									element: <ClassInfoView/>
								},
								{
									path: 'new',
									children: [
										{
											path: '',
											index: true,
											element: <CreateClassView/>
										},
										{
											path: ':classId',
											element: <AddStudentView/>
										}
									]
								},

							]

						},
						{
							path: 'teachers',
							element: <div>Les enseignants ici</div>,
						},
						{
							path: 'reports',
							element: <div>Les rapports ici</div>
						},

					]
				}
			]
		},
		// La page d'authentification
		{
			path: '/auth',
			element: <AuthUI/>,
			errorElement: <ErrorPage/>
		}
	])
	return <Suspense>
		<RouterProvider router={router}/>
	</Suspense>
}


