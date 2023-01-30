import { Link, Redirect, Route, Switch, useRouteMatch } from "react-router-dom"
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

const Navigation = () => {
    let { url } = useRouteMatch();

    return (
        <>
            <h2>LazyLayout Pages</h2>
            
            <ul>
                <li>
                    <Link to={`${url}/lazy1`}> LazyPage 1 </Link>
                </li>
                <li>
                    <Link to={`${url}/lazy2`}> LazyPage 2 </Link>
                </li>
                <li>
                    <Link to={`${url}/lazy3`}> LazyPage 3 </Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={`${url}/lazy1`} render={() => <LazyPage1 />} />
                <Route exact path={`${url}/lazy2`} render={() => <LazyPage2 />} />
                <Route exact path={`${url}/lazy3`} render={() => <LazyPage3 />} />
                <Redirect to={`${url}/lazy1`} />
            </Switch>
        </>
    )
}

export default Navigation