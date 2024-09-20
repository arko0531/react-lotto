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
      price: '',
      lottoControl: false,
      historyControl : false,
      ticketCount : 0,
      resultNumberSet: [],
      inputNumbers: Array(7).fill(''),
      isModal: false
    }
  }

  // 로또 번호 값 변경 시
  handleChangeNumber = (value, index) => {
    const {inputNumbers} = this.state;
    const numbers = [...inputNumbers];
    numbers[index] = value;
    this.setState({inputNumbers : numbers})
  }

  // 로또 번호 저장
  handleSubmit = () => {
      const {inputNumbers} = this.state;
      let emptyValue = false;

      for (let i = 0 ; i < inputNumbers.length; i++) {
          if (inputNumbers[i] === '') {
              emptyValue = true;
              break;  
          }
      }      

      if (emptyValue) {
          alert('모든 번호를 입력해 주세요.');
          return;
      }

      const numbersSet = new Set(inputNumbers); 
      if (numbersSet.size !== inputNumbers.length) {
          alert('중복된 번호는 입력할 수 없습니다.');
          return;
      }

      console.log('저장된 번호:', inputNumbers); // 확인용
  }


  // 가격 변경 시
  handlePriceChange = (event) => {
    const value = event.target.value;
    this.setState({price : value})
  }

  // 구매
  handleLottoBuy = () => {
    const price = Number(this.state.price);

    if (price % 1000 !== 0 || price <= 0) {
        alert("1,000원 단위로 금액을 입력해 주세요.");
        return;
    }

    const ticketCount = price / 1000;
    this.setState({
        lottoControl : true
    }); 

    this.handleonTicketCount(ticketCount); // 구매한 개수 전달
  }


  // 구매 버튼 클릭 시 활성화
  handleHistoryVisible = () => {
    this.setState({
      historyControl : true,
    })
  }

  // 구매한 개수
  handleonTicketCount = (ticketCount) => {
    this.setState({ ticketCount }, 
      () => {
      const resultNumberSet = this.randomNumbers(ticketCount);
      this.setState({ resultNumberSet });
    });
    
    console.log(ticketCount + '장'); // 확인용
  }


  // 랜덤 번호
  randomNumbers = (ticketCount) => {
    const numbersSetArray = []

    for (let i = 0; i < ticketCount; i++) {
      const numbers = new Set(); // 중복 제거    

      for (let j = 0; numbers.size < 7; j++) {
        const randomNum = Math.floor(Math.random() * 45 + 1);
        numbers.add(randomNum);
      }
      numbersSetArray.push(Array.from(numbers)) // 배열 변환
    }
    
    console.log('생성된 로또 번호: ', numbersSetArray); // 확인용

    this.setState({resultNumberSet : numbersSetArray}); 

    return numbersSetArray;
  }

  // 모달
  handleOpenModal = () => {
    this.setState({isModal : true});
  }
  handleCloseModal = () => {
    this.setState({isModal : false});
  }


  render() {
    const {price, lottoControl, historyControl, ticketCount, resultNumberSet, inputNumbers, isModal} = this.state;
    const historyVisible = historyControl ? "" : "historyVisibleNone";
    const modalVisible = isModal ? "" : "modalVisibleNone";

    return (
      <div className='Wrapper'>
        <h1 className='title'>행운의 로또</h1>
        <LottoNumber 
          inputNumbers = {inputNumbers}
          onChangeNumber = {this.handleChangeNumber}
          onSubmit={this.handleSubmit}
        />
        <LottoBuy 
          price = {price}
          lottoControl = {lottoControl}
          onHistoryVisible = {this.handleHistoryVisible}
          onLottoBuy={this.handleLottoBuy}
          onPriceChange={this.handlePriceChange}
          onOpenModal={this.handleOpenModal}
        />
        <div className={historyVisible}>
          <LottoBuyHistory 
            ticketCount = {ticketCount}
            resultNumberSet = {resultNumberSet}
          />
        </div>    
        <div className={modalVisible}>
          <ResultModal 
            onCloseModal={this.handleCloseModal}
          />
        </div>     
      </div>
    );
  }
}

export default App;
