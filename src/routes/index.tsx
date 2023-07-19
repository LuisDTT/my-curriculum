import { createHashRouter } from 'react-router-dom'
import { ErrorPage } from '../pages/ErrorPage'
import { Root } from '../pages/Root'
import { projectLoader } from '../pages/ProjectInfo'
import { lazy } from 'react'

const Home = lazy(() => import('../pages/Home'))
const Resume = lazy(() => import('../pages/Resume'))
const Portfolio = lazy(() => import('../pages/Portfolio'))
const ProjectInfo = lazy(() => import('../pages/ProjectInfo'))
const Contact = lazy(() => import('../pages/Contact'))

export const router = createHashRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: 'resume',
				element: <Resume />
			},
			{
				path: 'portfolio',
				element: <Portfolio />
			},
			{
				path: 'portfolio/:projectId',
				element: <ProjectInfo />,
				loader: projectLoader
			},
			{
				path: 'contact',
				element: <Contact />
			}
		]
	}
])
