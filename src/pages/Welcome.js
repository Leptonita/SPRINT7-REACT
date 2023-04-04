import { Link } from 'react-router-dom';
import NavBar from "../components/NavBar";
import { DivWelcome, TitleW, BtnW } from '../components/Panel-styled';

const Welcome = () => {

    return (
        <div>
            <NavBar />
            <TitleW><h1>Calcular el presupuesto</h1></TitleW>

            <DivWelcome>
                <div>
                    Bienvenid@s a Webs+Go.
                    Hemos preparado esta aplicación, para ofrecerte una rápida valoración económica de nuestros servicios web.
                </div>
                <br />
                <div>

                    Para crear la página web, podrás elegir cuantas páginas e idiomas desees.
                    Adicionalmente puedes incluir en el presupuesto servicios de posicionamiento en buscadores (SEO) y publicidad en Google Ads para completar la plena funcionalidad de la web.
                </div>
                <div>
                    <Link to="/budget"><BtnW>Calcular Presupuesto</BtnW></Link>
                </div>

            </DivWelcome>

        </div>
    )
}
export default Welcome;