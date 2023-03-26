import { useEffect, useState } from 'react';
import { Btn, InputTxt, DivInputBtn } from './Panel-styled';

const InputBtn = ({ id, name, placeholder, value, handleChange }) => {

    const [valueNum, setValueNum] = useState(value)

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
    return (
        <>
            <Btn onClick={increaseNum}>+</Btn>
            <InputTxt id={id} type="text" name={name} placeholder={placeholder} value={valueNum}
                onChange={handleInputNumChange} />
            <Btn onClick={decreaseNum}>-</Btn>

        </>
    )
}
export default InputBtn;