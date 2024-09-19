import './App.css';
import { Component } from "react";
import LottoNumber from './components/LottoNumber';
import LottoBuy from './components/LottoBuy';
import LottoBuyHistory from './components/LottoBuyHistory';
import ResultModal from './components/ResultModal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historyControl : false,
      ticketCount  :0
    }
  }

  handleHistoryVisible = () => {
    this.setState({
      historyControl : true,
    })
  }

  handleonTicketCount = (ticketCount) => {
    this.setState({
      ticketCount
    }) 
    
    console.log(ticketCount + '장'); // 확인용
  }

  render() {
    const {historyControl, ticketCount} = this.state;
    const historyVisible = historyControl ? "" : "historyVisibleNone";

    return (
      <div className='Wrapper'>
        <h1 className='title'>행운의 로또</h1>
        <LottoNumber />
        <LottoBuy 
          onHistoryVisible = {this.handleHistoryVisible}
          onTicketCount = {this.handleonTicketCount}
        />
        <div className={historyVisible}>
          <LottoBuyHistory 
            ticketCount = {ticketCount}
          />
        </div>    
        <ResultModal />
      </div>
    );
  }
}

export default App;
