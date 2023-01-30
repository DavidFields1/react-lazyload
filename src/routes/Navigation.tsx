import { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import { routes } from './routes';
import logo from '../assets/react.svg';

export const Navigation = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
        <Router>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        {
                            routes.map(({path, name }) => (
                                <li key={path}>
                                    <NavLink to={path} activeClassName='nav-active' exact> { name } </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <Switch>
                    {
                        routes.map(({path, Component}) => (
                            <Route path={path} key={path} render={() => <Component />} >
                                {/* <Component /> */}
                            </Route>        
                        ))
                    }
                    <Redirect to={routes[0].path} />
                </Switch>
            </div>
        </Router>
    </Suspense>
  )
}
