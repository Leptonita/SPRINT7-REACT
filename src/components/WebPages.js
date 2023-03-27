import { useEffect, useState } from 'react';
import { DivWebPages, DivInputBtn } from './Panel-styled';
import InputBtn from './InputBtn';
import useLocalStorage from '../useLocalStorage';

const WebPages = ({ amountPagesLang }) => {
    const [numPages, setNumPages] = useLocalStorage('numPages', 0);
    const [numLanguages, setNumLanguages] = useLocalStorage('numLanguages', 1);

    useEffect(() => {
        amountPagesLang(numPages, numLanguages);
    }, [numPages, numLanguages])

    /* const handleNumPages = (event) => {
        if (event.target.value >= 0) {
            setNumPages(parseInt(event.target.value));
        } else {
            alert("sólo número enteros positivos")
        }
    } */

    const handleNumPages = (num) => {
        setNumPages(parseInt(num));
    }

    /* const handleNumLanguages = (event) => {
        if (event.target.value > 0) {
            setNumLanguages(parseInt(event.target.value));
        } else {
            alert("la web debe tener un idioma como mínimo")
        }
    } */

    const handleNumLanguages = (num) => {

        setNumLanguages(parseInt(num));
    }

    return (
        <DivWebPages>

            <DivInputBtn>
                <label htmlFor="pages2">Número de páginas </label>
                <InputBtn id="pages2" name="numPag" placeholder="0" value={numPages} handleChange={handleNumPages} />
            </DivInputBtn>
            <br />
            <DivInputBtn>
                <label htmlFor="languages">Número de idiomas </label>
                <InputBtn id="languages" type="number" name="numPag" placeholder="1" value={numLanguages}
                    handleChange={handleNumLanguages} />
            </DivInputBtn>

        </DivWebPages >
    )
}
export default WebPages;



