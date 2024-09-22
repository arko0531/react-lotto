import React from "react";
import "../css/LottoBuyHistoryItem.css";
import ResultNumber from "./ui/ResultNumber";
function LottoBuyHistoryItem(props) {
    const {resultNum} = props;
        
    return(
        <div className="resultNumberWrapper">
            {resultNum.map((num, index) => (
                <ResultNumber
                    key={index}
                    number={num}
                />
            ))}
        </div>
    );
    
}
export default LottoBuyHistoryItem;