import { LazyExoticComponent, lazy } from 'react';
import { NoLazyPage } from '../lazy-load/pages';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../lazy-load/pages';
interface Route {
	to: string;
	path: string;
	Component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
	name: string;
}

const LazyLayout = lazy(
	/* webpackChunkName: "LazyLayout"*/
	() => import('../lazy-load/layout/LazyLayout')
);
const Lazy2 = lazy(
	/* webpackChunkName: "LazyPage2"*/
	() => import('../lazy-load/pages/LazyPage2')
);
const Lazy3 = lazy(
	/* webpackChunkName: "LazyPage3"*/
	() => import('../lazy-load/pages/LazyPage3')
);

export const routes: Route[] = [
	{
		to: '/lazyload/',
		path: '/lazyload/*',
		Component: LazyLayout,
		name: 'Lazy Layout',
	},
	{
		to: '/nolazy',
		path: 'nolazy',
		Component: NoLazyPage,
		name: 'No Lazy',
	},
	// {
	// 	to: '/lazy3',
	// 	path: 'lazy3',
	// 	Component: Lazy3,
	// 	name: 'Lazy 3',
	// },
];
