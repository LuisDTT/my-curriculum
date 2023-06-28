import {
	Route,
	createBrowserRouter,
	createRoutesFromElements
} from 'react-router-dom'
import { Home } from '../pages/Home'
import { Resume } from '../pages/Resume'
import { Error404 } from '../pages/Error404'

export const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Home />} errorElement={<Error404 />} />
			<Route path="/resume" element={<Resume />} />
			{/* <Route path="/portfolio" element={<Portfolio />} /> */}
			{/* <Route path="/contact" element={<Contact />} /> */}
		</>
	)
)
