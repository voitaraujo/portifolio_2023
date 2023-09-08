import { AnimatePresence } from 'framer-motion';
import {
	Outlet,
	Route,
	BrowserRouter as Router,
	Routes,
	useLocation,
} from 'react-router-dom';

import { useLayoutEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import PageContainer from './components/Page';
import About from './pages/About';
import Contacts from './pages/Contacts';
import ErrorPage from './pages/Error';
import Intro from './pages/Intro';
import Projects from './pages/Projects';

const pagesToRoutes = [
	{ path: '/app/sobre', component: <About /> },
	{ path: '/app/projetos', component: <Projects /> },
	{ path: '/app/contatos', component: <Contacts /> },
];

function ScrollToTop() {
	const { pathname } = useLocation();

	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

const PageTemplate = () => {
	return (
		<>
			<PageContainer.SafeArea>
				<Header
					links={
						pagesToRoutes.map((r) => r.path.split('/').at(-1)) as [
							string,
							string,
							string
						]
					}
				/>
				<Outlet />
			</PageContainer.SafeArea>
			<Footer />
		</>
	);
};

function AnimatedRoutes() {
	const location = useLocation();

	return (
		<AnimatePresence mode='wait'>
			<Routes location={location} key={location.pathname.split('/').at(1)}>
				<Route path='/' element={<Intro />} />
				<Route path='/app' element={<PageTemplate />}>
					{pagesToRoutes.map((r) => (
						<Route key={r.path} path={r.path} element={r.component} />
					))}
				</Route>
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</AnimatePresence>
	);
}

export default function AppRoutes() {
	return (
		<Router>
			<ScrollToTop />
			<AnimatedRoutes />
		</Router>
	);
}
