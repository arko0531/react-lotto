import React, {forwardRef} from "react";
import "../../css/InputNumber.css";

const InputNumber = forwardRef((props, ref) => {
    const { inputNumber, onChangeNumber, index, onKeyDown } = props;

    const handleChange = (event) => {
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
            ref={ref}
            onKeyDown={onKeyDown}
        />
    );
    
})

export default InputNumber;