import { Component } from "react";
import "../css/LottoBuyHistoryItem.css";
import ResultNumber from "./ui/ResultNumber";
class LottoBuyHistoryItem extends Component {
    render() {
        const {resultNum} = this.props;
        
        return(
            <div className="resultNumberWrapper">
                {resultNum.slice(0, 6).map((num, index) => (
                <ResultNumber
                    key={index}
                    number={num}
                />
                ))}

                <div className="plusText">+</div>

                <ResultNumber 
                    key={6}
                    number={resultNum[6]}
                />
            </div>
        );
    }
}
export default LottoBuyHistoryItem;