import './App.css';
import { Component } from "react";
import LottoNumber from './components/LottoNumber';
import LottoBuy from './components/LottoBuy';
import LottoBuyHistory from './components/LottoBuyHistory';
import ResultModal from './components/ResultModal';

class App extends Component {
  render() {
    return (
      <div className='Wrapper'>
        <h1 className='title'>행운의 로또</h1>
        <LottoNumber />
        <LottoBuy />
        <LottoBuyHistory />
        <ResultModal />
      </div>
    );
  }
}

export default App;
