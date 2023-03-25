import { useEffect, useState } from 'react';
import { DivWebPages } from './Panel-styled';

const WebPages = ({ amountPagesLang }) => {
    const [numPages, setNumPages] = useState(0);
    const [numLanguages, setNumLanguages] = useState(1);

    useEffect(() => {
        amountPagesLang(numPages, numLanguages);
    }, [numPages, numLanguages])

    const handleNumPages = (event) => {
        if (event.target.value >= 0) {
            setNumPages(parseInt(event.target.value));
        } else {
            alert("sólo número enteros positivos")
        }
    }

    const handleNumLanguages = (event) => {
        if (event.target.value > 0) {
            setNumLanguages(parseInt(event.target.value));
        } else {
            alert("la web debe tener un idioma como mínimo")
        }
    }

    return (
        <DivWebPages>
            <div>
                <label htmlFor="pages">Número de páginas extra </label>
                <input id="pages" type="number" name="numPag" placeholder="0" value={numPages}
                    onChange={handleNumPages} />
            </div>

            <div>
                <label htmlFor="languages">Número de idiomas </label>
                <input id="languages" type="number" name="numPag" placeholder="1" value={numLanguages}
                    onChange={handleNumLanguages} />
            </div>

        </DivWebPages >
    )
}
export default WebPages;



