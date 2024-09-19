import { Component } from "react";
import "../css/LottoBuy.css";
import Button from "./ui/Button";

class LottoBuy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price : '',
            lottoControl : false
        }
    }

    hanldlePriceChange = (event) => {
        const value = event.target.value;
        this.setState({price : value})
    }

    handleLottoBuy = () => {
        const price = Number(this.state.price);
        const {onTicketCount} = this.props;

        if (price % 1000 !== 0 || price <= 0) {
            alert("1,000원 단위로 금액을 입력해 주세요.");
            return;
        }

        const ticketCount = price / 1000;
        this.setState({
            lottoControl : true
        }); 
        
        console.log(ticketCount + '장');

        onTicketCount(ticketCount); // 구매한 개수 전달
    }

    render() {
        const {lottoControl} = this.state;
        const contorlvisible = lottoControl ? "" : "lottoControlNone";
        const { onHistoryVisible } = this.props;

        return(
            <div>
                <h3>구매하기 (1장 : 1,000원)</h3>
                <div className="buyInputWrapper">
                    <input 
                        className="buyInput" 
                        type="text" 
                        placeholder="1,000원 단위로 금액을 입력해 주세요." 
                        value={this.state.price}
                        onChange={this.hanldlePriceChange}
                    />

                    <Button 
                        title = "구매"
                        className = "buyButton"
                        onClick = {this.handleLottoBuy}
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
                            //onClick = {}
                        />
                        <Button 
                            title = "초기화"
                            className = "restartButton"
                            //onClick = {}
                        />      
                    </div>         
                </div>
            </div>
        );
    }
}

export default LottoBuy;