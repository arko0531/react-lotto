import { Component } from "react";
import "../css/LottoBuyHistoryItem.css";
import ResultNumber from "./ui/ResultNumber";
class LottoBuyHistoryItem extends Component {
    render() {
        const {resultNum} = this.props;
        
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
}
export default LottoBuyHistoryItem;