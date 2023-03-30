import { useEffect, useState } from 'react';
import { Btn, InputTxt, BtnInfo } from './Panel-styled';
import WebInfo from './WebInfo';

const WebInputBtn = ({ id, name, placeholder, value, handleChange }) => {

    const [valueNum, setValueNum] = useState(value);
    const [infoIsClicked, setInfoIsClicked] = useState(false);

    useEffect(() => {
        handleChange(valueNum);
    }, [valueNum])

    const handleInputNumChange = (event) => {
        if (event.target.value >= 0) {
            setValueNum(Number(event.target.value));
        } else {
            alert("sólo números enteros positivos");
        }
    }


    const increaseNum = () => {
        return valueNum >= 0 ? setValueNum(valueNum + 1) : 0;
    }

    const decreaseNum = () => {
        return valueNum >= 1 ? setValueNum(valueNum - 1) : 0;
    }

    const showInfoweb = () => {
        setInfoIsClicked((c) => !c);
    }


    return (
        <>
            <Btn onClick={increaseNum}>+</Btn>
            <InputTxt id={id} type="text" name={name} placeholder={placeholder} value={valueNum}
                onChange={handleInputNumChange} />
            <Btn onClick={decreaseNum}>-</Btn>
            <BtnInfo onClick={showInfoweb}> i </BtnInfo>

            <div>
                {infoIsClicked && <WebInfo servei={id} valueNum={valueNum} infoShow={showInfoweb} />}
            </div>

        </>
    )
}
export default WebInputBtn;