import { Component } from "react";
import InputNumber from "./ui/InputNumber";
import "../css/LottoNumber.css"

class LottoNumber extends Component {
    render() {
        return(
            <div>
                <h3>당첨 번호 입력</h3>
                <div className="numberWrapper">
                    <InputNumber />
                    <InputNumber />
                    <InputNumber />
                    <InputNumber />
                    <InputNumber />
                    <InputNumber />
                    <div className="plusText">+</div>
                    <InputNumber />
                </div>
                <div className="prizeText">총 당첨금 : 30,000,000,000원</div>
            </div>
        );
    }
}

export default LottoNumber;