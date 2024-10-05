import React, {forwardRef} from "react";
import styled from "styled-components";

const InputNumber = forwardRef((props, ref) => {
    const { inputNumber, onChangeNumber, index, onKeyDown } = props;

    const handleChange = (event) => {
        const value = event.target.value;
        
        if (value === '' || (Number(value) >= 1 && Number(value) <= 45)) {
            onChangeNumber(value, index);
        }
    }
    
    return (
        <StyledInputNumber 
            type="text" 
            value={inputNumber}
            onChange={handleChange}
            ref={ref}
            onKeyDown={onKeyDown}
        />
    );
    
})

export default InputNumber;


const StyledInputNumber = styled.input`
    width: 5vw;
    height: 5vw;
    border-radius: 50%;
    border: 1px solid gray;
    text-align: center;
    font-size: 3vw;
`