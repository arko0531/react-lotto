import { Component } from "react";
import "../css/LottoBuyHistory.css"
import LottoBuyHistoryItem from "./LottoBuyHistoryItem";

class LottoBuyHistory extends Component {
    render() {
        const {ticketCount, resultNumberSet} = this.props;

        const historyItems = resultNumberSet.map((resultNum, index) => (
            <LottoBuyHistoryItem
                key={index}
                resultNum={resultNum}
            />
        ));
        
        return(
            <div>
                <h3>로또 구매 내역</h3>
                <p>- {ticketCount}장 구매</p>
                <div className="buyHistoryWrapper">
                    {historyItems}
                </div>
            </div>
        );
    }
}

export default LottoBuyHistory;