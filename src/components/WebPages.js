import { useEffect, useState } from 'react';
import { DivWebPages, DivInputBtn } from './Panel-styled';
import WebInputBtn from './WebInputBtn';
import useLocalStorage from '../utils/useLocalStorage';

const WebPages = ({ amountPagesLang, numPages, setNumPages, numLanguages, setNumLanguages }) => {
    /* const [numPages, setNumPages] = useLocalStorage('numPages', 0);
    const [numLanguages, setNumLanguages] = useLocalStorage('numLanguages', 1); */

    useEffect(() => {
        amountPagesLang(numPages, numLanguages);
    }, [numPages, numLanguages])


    const handleNumPages = (num) => {
        setNumPages(parseInt(num));
    }

    const handleNumLanguages = (num) => {

        setNumLanguages(parseInt(num));
    }

    return (
        <DivWebPages>

            <DivInputBtn>
                <label htmlFor="pages">Número de páginas </label>
                <WebInputBtn id="pages" name="numPag" placeholder="0" value={numPages} handleChange={handleNumPages} />

            </DivInputBtn>
            <br />
            <DivInputBtn>
                <label htmlFor="languages">Número de idiomas </label>
                <WebInputBtn id="languages" type="number" name="numPag" placeholder="1" value={numLanguages}
                    handleChange={handleNumLanguages} />

            </DivInputBtn>

        </DivWebPages >
    )
}
export default WebPages;



