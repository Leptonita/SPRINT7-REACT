import { Link } from 'react-router-dom';
import { UlMenu, LiLogo, LiLink } from './Panel-styled';

const NavBar = () => {

    return (
        <UlMenu className="menu">
            <LiLogo>Webs+Go</LiLogo>
            <LiLink><Link to="/">Presentación</Link></LiLink>
            <LiLink><Link to="/budget">Presupuesto</Link></LiLink>
        </UlMenu>
    );
}
export default NavBar;