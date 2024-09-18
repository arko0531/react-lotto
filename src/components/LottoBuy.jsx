import { Component } from "react";
import "../css/LottoBuy.css";
import Button from "./ui/Button";

class LottoBuy extends Component {
    render() {
        return(
            <div>
                <h3>구매하기 (1장 : 1,000원)</h3>
                <div className="buyInputWrapper">
                    <input className="buyInput" type="text" placeholder="1,000원 단위로 금액을 입력해주세요." />
                    <Button 
                        title = "구매"
                        className = "buyButton"
                        //onClick = {}
                    />
                </div>

                <div className="resultButtonWrapper">
                    <Button 
                        title = "번호 확인"
                        className = "ResultNumberButton"
                        //onClick = {}
                    />
                    <Button 
                        title = "결과 확인"
                        className = "ResultModalButton"
                        //onClick = {}
                    />
                    <Button 
                        title = "초기화"
                        className = "restartButton"
                        //onClick = {}
                    />
                </div>
            </div>
        );
    }
}

export default LottoBuy;