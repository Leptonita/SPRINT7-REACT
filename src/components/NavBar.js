
import { UlMenu, LiLogo, LiLink } from './Panel-styled';

const NavBar = () => {

    return (
        <UlMenu className="menu">
            <LiLogo><LiLink to="/">Webs+Go</LiLink></LiLogo>
            {/* <LiLink>Presentación</LiLink>
            <LiLink><Link to="/budget">Presupuesto</Link></LiLink> */}
        </UlMenu>
    );
}
export default NavBar;