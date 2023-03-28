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
                    Para ofrecerte una valoración según los servicios que necesites en tu página web,
                    hemos preparado esta aplicación.
                </div>
                <br />
                <div>

                    Los servicios que puedes valorar son los necesarios para crear la página web, teniendo en cuenta cuantas páginas e idiomas desees.
                    Adicionalmente puedes incluir al presupuesto servicios de posicionamiento en buscadores (SEO) y publicidad en Google Ads para completar la plena funcionalidad de la web.
                </div>
                <div>
                    <Link to="/budget"><BtnW>Calcular Presupuesto</BtnW></Link>
                </div>

            </DivWelcome>

        </div>
    )
}
export default Welcome;