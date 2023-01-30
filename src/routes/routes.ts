// import { LazyPage1, LazyPage2, LazyPage3 } from '../lazy-load/pages';

import { LazyExoticComponent, lazy } from 'react';

interface Route {
	path: string;
	Component: (() => JSX.Element) | LazyExoticComponent<() => JSX.Element>;
	name: string;
	children?: Route[];
}

const LazyPage1 = lazy(() => import('../lazy-load/pages/LazyPage1'));
const LazyPage2 = lazy(() => import('../lazy-load/pages/LazyPage2'));
const LazyPage3 = lazy(() => import('../lazy-load/pages/LazyPage3'));

export const routes: Route[] = [
	{
		name: 'Lazy1',
		Component: LazyPage1,
		path: '/lazy1',
	},
	{
		name: 'Lazy2',
		Component: LazyPage2,
		path: '/lazy2',
	},
	{
		name: 'Lazy3',
		Component: LazyPage3,
		path: '/lazy3',
	},
];
