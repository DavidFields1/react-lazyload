// import { LazyPage1, LazyPage2, LazyPage3 } from '../lazy-load/pages';
import { LazyExoticComponent, lazy } from 'react';
import NoLazy from '../lazy-load/pages/NoLazy';

interface Route {
	path: string;
	Component: (() => JSX.Element) | LazyExoticComponent<() => JSX.Element>;
	name: string;
	children?: Route[];
}

const LazyLayout = lazy(() => import('../lazy-load/layout/LazyLayout'));
// const LazyPage2 = lazy(() => import('../lazy-load/pages/LazyPage2'));
// const LazyPage3 = lazy(() => import('../lazy-load/pages/LazyPage3'));

export const routes: Route[] = [
	{
		name: 'Lazy Nested',
		Component: LazyLayout,
		path: '/lazylayout',
	},
	{
		name: 'No Lazy',
		Component: NoLazy,
		path: '/nolazy',
	},
	// {
	// 	name: 'Lazy2',
	// 	Component: LazyPage2,
	// 	path: '/lazy2',
	// },
	// {
	// 	name: 'Lazy3',
	// 	Component: LazyPage3,
	// 	path: '/lazy3',
	// },
];
