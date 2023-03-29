import { useState, useEffect } from 'react';
import { DivInfo, DivInfoTxt } from './Panel-styled';

const Info = (props) => {
    const [isVisible, setIsVisible] = useState(true);

    /* */
    useEffect(() => {
        setIsVisible(isVisible);
    }, [isVisible])

    const infoVisibility = () => {
        setIsVisible(!isVisible);
    }
    const infoName = (props.servei === "pages") ? "páginas presupuestadas " : "idiomas presupuestados "

    return (
        <DivInfo isVisible={isVisible} onClick={props.infoShow} >
            <DivInfoTxt onClick={(e) => e.stopPropagation()} >
                El número de {infoName} es:  {props.valueNum}
            </DivInfoTxt>

        </DivInfo>
    )
}
export default Info;