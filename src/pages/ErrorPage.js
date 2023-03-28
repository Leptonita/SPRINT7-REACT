import { useRouteError } from "react-router-dom";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <ul className="menu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/page2">Page2</NavLink></li>
                <li><NavLink to="/page3">Page3</NavLink></li>
            </ul>
            <h1>Error Page</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}
export default ErrorPage;