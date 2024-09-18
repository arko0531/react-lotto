import { Component } from "react";
import "../css/LottoBuyHistoryItem.css";
import ResultNumber from "./ui/ResultNumber";

class LottoBuyHistoryItem extends Component {
    render() {
        return(
            <div className="resultNumberWrapper">
                <ResultNumber />
                <ResultNumber />
                <ResultNumber />
                <ResultNumber />
                <ResultNumber />
                <ResultNumber />
                <div className="plusText">+</div>
                <ResultNumber />
            </div>
        );
    }
}

export default LottoBuyHistoryItem;