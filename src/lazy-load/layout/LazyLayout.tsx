import { NavLink, Redirect, Route, Switch } from "react-router-dom"
import { routes } from "../../routes/routes"
import Navigation from "../router/Navigation"

export const LazyLayout = () => {
    return (
        <div>
            <h1> LazyLayout </h1>

            <Navigation />
        </div>
    )
}

export default LazyLayout