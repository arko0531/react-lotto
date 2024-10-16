// import React, { useState, useEffect } from "react";
// import LottoNumber from "../lottoNumber";
// import LottoBuy from "../lottoBuy";
// import LottoBuyHistory from "../contents/LottoBuyHistory";
// import ResultModal from "../modal/ResultModal";
// import styled from "styled-components";
// import Header from "../header";

// function Content() {
//   const [price, setPrice] = useState("");
//   const [ticketCount, setTicketCount] = useState(0);
//   const [resultNumberSet, setResultNumberSet] = useState([]);
//   const [tempInputNumbers, setTempInputNumbers] = useState(Array(7).fill("")); // 임시 입력 번호
//   const [inputNumbers, setInputNumbers] = useState(Array(7).fill("")); // 실제 입력 번호
//   const [isModal, setIsModal] = useState(false);
//   const [totalRank, setTotalRank] = useState({
//     firstClass: 0,
//     secondClass: 0,
//     thirdClass: 0,
//     fourthClass: 0,
//     fifthClass: 0,
//   });

//   // 로또 번호 값 변경 시
//   const handleChangeNumber = (value, index) => {
//     const numbers = [...tempInputNumbers];
//     numbers[index] = value.trim();
//     setTempInputNumbers(numbers);
//   };

//   // 로또 번호 저장
//   const handleSubmit = () => {
//     if (tempInputNumbers.includes("")) {
//       alert("모든 번호를 입력해 주세요.");
//       return;
//     }

//     const numbersSet = new Set(tempInputNumbers);
//     if (numbersSet.size !== tempInputNumbers.length) {
//       alert("중복된 번호는 입력할 수 없습니다.");
//       return;
//     }

//     setInputNumbers(tempInputNumbers);

//     //console.log('저장된 번호:', inputNumbers); // 확인용
//   };

//   // 구매

//   // 구매 버튼 클릭 시 활성화

//   // 모달
//   const handleOpenModal = () => {
//     if (inputNumbers.includes("")) {
//       alert("당첨 번호를 입력해 주세요.");
//       return;
//     }

//     const totalRank = totalRankCalc();

//     setIsModal(true);
//     setTotalRank(totalRank);
//   };
//   const handleCloseModal = () => {
//     setIsModal(false);
//   };

//   // 순위 계산
//   const totalRankCalc = () => {
//     const inputMainNumbers = inputNumbers.slice(0, 6).map(Number); // 입력한 번호
//     const inputBonusNumber = Number(inputNumbers[6]);

//     //console.log("입력한 로또 번호 : " + inputMainNumbers + " + " + inputBonusNumber); // 확인용

//     const results = {
//       firstClass: 0,
//       secondClass: 0,
//       thirdClass: 0,
//       fourthClass: 0,
//       fifthClass: 0,
//     };

//     for (let i = 0; i < resultNumberSet.length; i++) {
//       const numbers = resultNumberSet[i]; // 구매한 번호

//       //console.log("구매한 로또 번호 : " + numbers); // 확인용

//       const totalCount = inputMainNumbers.filter((number) =>
//         numbers.includes(number)
//       ).length;

//       if (totalCount === 6) {
//         results.firstClass += 1;
//       } else if (totalCount === 5 && numbers.includes(inputBonusNumber)) {
//         results.secondClass += 1;
//       } else if (totalCount === 5) {
//         results.thirdClass += 1;
//       } else if (totalCount === 4) {
//         results.fourthClass += 1;
//       } else if (totalCount === 3) {
//         results.fifthClass += 1;
//       }
//     }
//     //console.log(results); // 확인용
//     return results;
//   };

//   // 초기화
//   const handleReset = () => {
//     setPrice("");
//     setLottoControl(false);
//     setHistoryControl(false);
//     setTicketCount(0);
//     setResultNumberSet([]);
//     setTempInputNumbers(Array(7).fill(""));
//     setInputNumbers(Array(7).fill(""));
//     setIsModal(false);
//     setTotalRank({
//       firstClass: 0,
//       secondClass: 0,
//       thirdClass: 0,
//       fourthClass: 0,
//       fifthClass: 0,
//     });
//     setWinningTimer("");
//   };

//   // 당첨 발표까지 카운트다운 (매주 토요일 8시 35분)

//   useEffect(() => {
//     let timer;

//     if (lottoControl === true) {
//       //console.log('시간 측정'); // 확인용

//       winningTimeCount(); // 1초 딜레이
//       timer = setInterval(winningTimeCount, 1000);
//     }
//     return () => {
//       clearInterval(timer);
//     };
//   }, [lottoControl]);

//   return (
//     <>
//       <Wrapper>
//         <Header title="행운의 로또" />
//         <LottoNumber
//           inputNumbers={tempInputNumbers}
//           onChangeNumber={handleChangeNumber}
//           onSubmit={handleSubmit}
//         />
//         <LottoBuy
//           price={price}
//           lottoControl={lottoControl}
//           onHistoryVisible={handleHistoryVisible}
//           onLottoBuy={handleLottoBuy}
//           onPriceChange={handlePriceChange}
//           onOpenModal={handleOpenModal}
//           onReset={handleReset}
//           winningTimer={winningTimer}
//         />
//         <div>
//           {historyControl ? (
//             <LottoBuyHistory
//               ticketCount={ticketCount}
//               resultNumberSet={resultNumberSet}
//             />
//           ) : (
//             ""
//           )}
//         </div>
//         <div>
//           {isModal ? (
//             <ResultModal
//               onCloseModal={handleCloseModal}
//               totalRank={totalRank}
//               price={price}
//               ticketCount={ticketCount}
//             />
//           ) : (
//             ""
//           )}
//         </div>
//       </Wrapper>
//     </>
//   );
// }

// export default Content;
