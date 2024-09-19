import { Component } from "react";
import InputNumber from "./ui/InputNumber";
import Button from "./ui/Button";
import "../css/LottoNumber.css"

class LottoNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers : Array(7).fill('')
        }
    }

    handleChangeNumber = (value, index) => {
        const numbers = [...this.state.numbers];
        numbers[index] = value;
        this.setState({numbers});
    }

    handleSubmit = () => {
        const {numbers} = this.state;

        let emptyValue = false;

        for (let i = 0 ; i < numbers.length; i++) {
            if (numbers[i] === '') {
                emptyValue = true;
                break;  
            }
        }
        if (emptyValue) {
            alert('모든 번호를 입력해 주세요.');
            return;
        }
        
        console.log(numbers); // 확인용
    }

    render() {
        const {numbers} = this.state;

        return(
            <div>
                <h3>당첨 번호 입력</h3>
                <div className="numberWrapper">
                    {numbers.slice(0,6).map((number, index) => (
                        <InputNumber 
                            key={index}
                            inputNumber={number}
                            onChangeNumber={this.handleChangeNumber}
                            index={index}
                        />
                    ))}
                    <div className="plusText">+</div>
                    <InputNumber 
                        key={6}
                        inputNumber={numbers[6]}
                        onChangeNumber={this.handleChangeNumber}
                        index={6}
                    />
                </div>
                <div className="prizeText">
                    <p>총 당첨금 : 30,000,000,000원</p>

                    <Button 
                        title="번호 저장"
                        className="numberSave"
                        onClick = {this.handleSubmit}
                    />
                </div>
            </div>
        );
    }
}

export default LottoNumber;