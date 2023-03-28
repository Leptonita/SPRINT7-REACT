import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Budget from '../pages/Budget';
import ErrorPage from '../pages/ErrorPage';
import NavBar from '../components/NavBar';


const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<Welcome />} />
                <Route path="budget/" element={<Budget />} errorElement={<ErrorPage />} />

                { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco. 
            ::: Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for.*/}
                <Route path="*" element={<div><NavBar />

                    <h1>404 page</h1>

                    <p>
                        Something went wrong

                    </p>
                </div>} errorElement={<ErrorPage />} />

            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;