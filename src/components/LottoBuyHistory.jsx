import { Component } from "react";
import "../css/LottoBuyHistory.css"
import LottoBuyHistoryItem from "./LottoBuyHistoryItme";

class LottoBuyHistory extends Component {
    render() {
        // 확인용
        //const {ticketCount} = this.props;
        //console.log(ticketCount + '장');
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