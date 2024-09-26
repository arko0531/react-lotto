import './App.css';
import React, { useState, useEffect } from "react";
import LottoNumber from './components/LottoNumber';
import LottoBuy from './components/LottoBuy';
import LottoBuyHistory from './components/LottoBuyHistory';
import ResultModal from './components/ResultModal';

function App() {
  const [price, setPrice] = useState('');
  const [lottoControl, setLottoControl] = useState(false);
  const [historyControl, setHistoryControl] = useState(false);
  const [ticketCount, setTicketCount] = useState(0);
  const [resultNumberSet, setResultNumberSet] = useState([]);
  const [inputNumbers, setInputNumbers] = useState(Array(7).fill(''));
  const [isModal, setIsModal] = useState(false);
  const [totalRank, setTotalRank] = useState({
    firstClass: 0,
    secondClass: 0,
    thirdClass: 0,
    fourthClass: 0,
    fifthClass: 0,
  });
  const [winningTimer, setWinningTimer] = useState('');

  // 로또 번호 값 변경 시
  const handleChangeNumber = (value, index) => {
    const numbers = [...inputNumbers];
    numbers[index] = value.trim();
    setInputNumbers(numbers);
  }

  // 로또 번호 저장
  const handleSubmit = () => {
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

      //console.log('저장된 번호:', inputNumbers); // 확인용
  }


  // 가격 변경 시
  const handlePriceChange = (event) => {
    const value = event.target.value;
    setPrice(value.trim());
  }

  // 구매
  const handleLottoBuy = () => {
    const priceNumber = Number(price);

    if (priceNumber % 1000 !== 0 || priceNumber <= 0) {
        alert("1,000원 단위로 금액을 입력해 주세요.");
        return;
    }

    const ticketCount = priceNumber / 1000;
    setLottoControl(true);

    handleonTicketCount(ticketCount); // 구매한 개수 전달
  }


  // 구매 버튼 클릭 시 활성화
  const handleHistoryVisible = () => {
    setHistoryControl(true);
  }

  // 구매한 개수
  const handleonTicketCount = (ticketCount) => {
    setTicketCount(ticketCount);

    const resultNumberSet = randomNumbers(ticketCount);
    setResultNumberSet(resultNumberSet);
    
    //console.log(ticketCount + '장'); // 확인용
  }


  // 랜덤 번호
  const randomNumbers = (ticketCount) => {
    const numbersSetArray = []

    for (let i = 0; i < ticketCount; i++) {
      const numbers = new Set(); // 중복 제거    

      for (let j = 0; numbers.size < 6; j++) {
        const randomNum = Math.floor(Math.random() * 45 + 1);
        numbers.add(randomNum);
      }
      numbersSetArray.push(Array.from(numbers)) // 배열 변환
    }
    
    //console.log('생성된 로또 번호: ', numbersSetArray); // 확인용

    return numbersSetArray;
  }

  // 모달
  const handleOpenModal = () => {
    if (inputNumbers[0] === '') {
      alert('당첨 번호를 입력해 주세요.');
      return;
    }

    const totalRank = totalRankCalc();

    setIsModal(true);
    setTotalRank(totalRank);

  }
  const handleCloseModal = () => {
    setIsModal(false);
  }

  // 순위 계산
  const totalRankCalc = () => {
    const inputMainNumbers = inputNumbers.slice(0, 6).map(Number); // 입력한 번호
    const inputBonusNumber = Number(inputNumbers[6]);

    //console.log("입력한 로또 번호 : " + inputMainNumbers + " + " + inputBonusNumber); // 확인용

    const results = {
      firstClass: 0,
      secondClass: 0,
      thirdClass: 0,
      fourthClass: 0,
      fifthClass: 0
    }

    for (let i = 0; i < resultNumberSet.length; i++) {
      const numbers = resultNumberSet[i]; // 구매한 번호

      //console.log("구매한 로또 번호 : " + numbers); // 확인용

      const totalCount = inputMainNumbers.filter(number => numbers.includes(number)).length;

      if (totalCount === 6) {
        results.firstClass += 1;
      } else if (totalCount === 5 && numbers.includes(inputBonusNumber)) {
        results.secondClass += 1;
      } else if (totalCount === 5) {
        results.thirdClass += 1;
      } else if (totalCount === 4) {
        results.fourthClass += 1;
      } else if (totalCount === 3) {
        results.fifthClass += 1;
      }
    }
    //console.log(results); // 확인용
    return results;
  }

  // 초기화
  const handleReset = () => {
    setPrice('');
    setLottoControl(false);
    setHistoryControl(false);
    setTicketCount(0);
    setResultNumberSet([]);
    setInputNumbers(Array(7).fill(''));
    setIsModal(false);
    setTotalRank({
      firstClass: 0,
      secondClass: 0,
      thirdClass: 0,
      fourthClass: 0,
      fifthClass: 0
    });
    setWinningTimer('')
  }

  // 당첨 발표까지 카운트다운 (매주 토요일 8시 35분)
  const winningTimeCount = () => {
    const now = new Date();
    const winningTime = new Date();
    const dayOfWeek = now.getDay();

    const nextSaturday = 6 - dayOfWeek; // 토 : 6
    winningTime.setDate(now.getDate() + nextSaturday);
    winningTime.setHours(20);
    winningTime.setMinutes(35);
    winningTime.setSeconds(0);

     if (now >= winningTime) { // 당첨 발표 이후면 다음주로
       winningTime.setDate(winningTime.getDate() + 7);
     }

    const diff = winningTime - now;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000); 

    setWinningTimer(`${hours}시간 ${minutes}분 ${seconds}초`);
        
  }

  useEffect(() => {
    let timer;

    if (lottoControl === true) {
      //console.log('시간 측정'); // 확인용

      winningTimeCount(); // 1초 딜레이
      timer = setInterval(winningTimeCount, 1000);
    } 
    return () => {
      clearInterval(timer);
    }

  }, [lottoControl]);


    const historyVisible = historyControl ? "" : "historyVisibleNone";
    const modalVisible = isModal ? "" : "modalVisibleNone";

    return (
      <div className='Wrapper'>
        <h1 className='title'>행운의 로또</h1>
        <LottoNumber 
          inputNumbers = {inputNumbers}
          onChangeNumber = {handleChangeNumber}
          onSubmit={handleSubmit}
        />
        <LottoBuy 
          price = {price}
          lottoControl = {lottoControl}
          onHistoryVisible = {handleHistoryVisible}
          onLottoBuy={handleLottoBuy}
          onPriceChange={handlePriceChange}
          onOpenModal={handleOpenModal}
          onReset = {handleReset}
          winningTimer = {winningTimer}
        />
        <div className={historyVisible}>
          <LottoBuyHistory 
            ticketCount = {ticketCount}
            resultNumberSet = {resultNumberSet}
          />
        </div>    
        <div className={modalVisible}>
          <ResultModal 
            onCloseModal={handleCloseModal}
            totalRank={totalRank}
            price={price}
            ticketCount={ticketCount}
          />
        </div>     
      </div>
    );
}

export default App;
