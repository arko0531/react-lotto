import React from "react";
import "../css/LottoBuy.css";
import Button from "./ui/Button";

function LottoBuy (props) {
    const { price, lottoControl, onLottoBuy, onPriceChange, onHistoryVisible, onOpenModal, onReset } = props;
    const contorlvisible = lottoControl ? "" : "lottoControlNone";     

    return(
        <div>
            <h3>구매하기 (1장 : 1,000원)</h3>
            <div className="buyInputWrapper">
                <input 
                    className="buyInput" 
                    type="text" 
                    placeholder="1,000원 단위로 금액을 입력해 주세요." 
                    value={price}
                    onChange={onPriceChange}
                />

                <Button 
                    title = "구매"
                    className = "buyButton"
                    onClick = {onLottoBuy}
                />
            </div>

                
            <div className={contorlvisible}>
                <div className="resultButtonWrapper"> 
                    <Button 
                        title = "번호 확인"
                        className = "ResultNumberButton"
                        onClick = {onHistoryVisible}
                    />
                    <Button 
                        title = "결과 확인"
                        className = "ResultModalButton"
                        onClick = {onOpenModal}
                    />
                    <Button 
                        title = "초기화"
                        className = "restartButton"
                        onClick = {onReset}
                    />      
                </div>         
            </div>
        </div>
    );
}

export default LottoBuy;