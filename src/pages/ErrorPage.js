import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';
import { UlMenu, LiLogo, LiLink } from '../components/Panel-styled';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <UlMenu className="menu">
                <LiLogo>Webs+Go</LiLogo>
                <LiLink><Link to="/">Presentación</Link></LiLink>
                <LiLink><Link to="/budget">Presupuesto</Link></LiLink>
            </UlMenu>
            <h1>Error Page</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}
export default ErrorPage;