import React from "react";
import "../../css/InputNumber.css";

function InputNumber (props) {
    const { inputNumber } = props;

    const handleChange = (event) => {
        const { onChangeNumber, index} = props;
        const value = event.target.value;
        
        if (value === '' || (Number(value) >= 1 && Number(value) <= 45)) {
            onChangeNumber(value, index);
        }
    }
    
    return (
        <input 
            className="inputNumber" 
            type="text" 
            value={inputNumber}
            onChange={handleChange}
        />
    );
    
}

export default InputNumber;