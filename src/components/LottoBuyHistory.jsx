import React from "react";
import "../css/LottoBuyHistory.css"
import LottoBuyHistoryItem from "./LottoBuyHistoryItem";

function LottoBuyHistory (props) {
    const {ticketCount, resultNumberSet} = props;
        
    return(
        <div>
            <h3>로또 구매 내역</h3>
            <p>- {ticketCount}장 구매</p>
            <div className="buyHistoryWrapper">
                {resultNumberSet.map((resultNum, index) => (
                    <LottoBuyHistoryItem
                        key={index}
                        resultNum={resultNum}
                    />
                ))}
            </div>
        </div>
    );
    
}

export default LottoBuyHistory;