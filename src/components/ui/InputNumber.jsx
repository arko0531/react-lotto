import { Component } from "react";
import "../../css/InputNumber.css";

class InputNumber extends Component {
    handleChange = (event) => {
        const { onChangeNumber, index} = this.props;
        const value = event.target.value;
        if (value === '' || (Number(value) >= 1 && Number(value) <= 45)) {
            onChangeNumber(value, index);
        }
    }

    render() {
        const { inputNumber } = this.props;
        return (
            <input 
                className="inputNumber" 
                type="text" 
                value={inputNumber}
                onChange={this.handleChange}
            />
        );
    }
}

export default InputNumber;