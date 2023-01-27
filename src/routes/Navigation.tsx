import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import logo from '../assets/react.svg';

export const Navigation = () => {
  return (
    <Router>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="React Logo" />
                <ul>
                    <li>
                        <NavLink to='/' activeClassName='nav-active' exact> Home </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' activeClassName='nav-active' exact> About </NavLink>
                    </li>
                    <li>
                        <NavLink to='/users' activeClassName='nav-active' exact> Users </NavLink>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path='/about'>
                    <h1>AboutPage</h1>
                </Route>
                <Route path='/users'>
                    <h1>UsersPage</h1>
                </Route>
                <Route path='/'>
                    <h1>HomePage</h1>
                </Route>
                {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
            </Switch>
        </div>
    </Router>
  )
}
