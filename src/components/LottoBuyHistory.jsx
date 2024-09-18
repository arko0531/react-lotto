import { Component } from "react";
import "../css/LottoBuyHistory.css"
import LottoBuyHistoryItem from "./LottoBuyHistoryItme";

class LottoBuyHistory extends Component {
    render() {
        return(
            <div>
                <h3>로또 구매 내역</h3>
                <div className="buyHistoryWrapper">
                    <LottoBuyHistoryItem />
                </div>
            </div>
        );
    }
}

export default LottoBuyHistory;