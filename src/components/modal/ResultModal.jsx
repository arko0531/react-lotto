import React from "react";
import Button from "../ui/Button";
import styled from "styled-components";

function ResultModal(props) {
    const { onCloseModal, totalRank, price, ticketCount } = props;

    const prizesCalc = (totalRank) => {
        // 총 당첨금 : 30,000,000,000
        return {
            firstClass: totalRank.firstClass > 0 ? Math.floor(22500000000 / totalRank.firstClass) : 0, // 75%
            secondClass: totalRank.secondClass > 0 ? Math.floor(3750000000 / totalRank.secondClass) : 0, // 12.5%
            thirdClass: totalRank.thirdClass > 0 ? Math.floor(3750000000 / totalRank.thirdClass) : 0, // 12.5%
            fourthClass: totalRank.fourthClass > 0 ? 50000 * totalRank.fourthClass : 0,
            fifthClass: totalRank.fifthClass > 0 ? 5000 * totalRank.fifthClass : 0
        }
        
    }

    const totalPrizesCalc = (prizes, totalRank) => {
        // 총 당첨 금액
        return (
            (prizes.firstClass * totalRank.firstClass) +
            (prizes.secondClass * totalRank.secondClass) +
            (prizes.thirdClass * totalRank.thirdClass) +
            (prizes.fourthClass * totalRank.fourthClass) +
            (prizes.fifthClass * totalRank.fifthClass)
        );
    }
  
    // 수익 계산
    const prizes = prizesCalc(totalRank);
    const totalPrizes = totalPrizesCalc(prizes, totalRank);

    // 수익률
    const profit = ((totalPrizes - price) / price) * 100;


    return (
        <ModalWrpper>
            <ModalContent>
                <ModalTitle>당첨 통계</ModalTitle>
                <ResultTable>
                    <thead>
                        <tr>
                            <th>순위</th>
                            <th>당첨 횟수</th>
                            <th>당첨 금액(원)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1등</td>
                            <td>{totalRank.firstClass}</td>
                            <td>{prizes.firstClass.toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td>2등</td>
                            <td>{totalRank.secondClass}</td>
                            <td>{prizes.secondClass.toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td>3등</td>
                            <td>{totalRank.thirdClass}</td>
                            <td>{prizes.thirdClass.toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td>4등</td>
                            <td>{totalRank.fourthClass}</td>
                            <td>{prizes.fourthClass.toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td>5등</td>
                            <td>{totalRank.fifthClass}</td>
                            <td>{prizes.fifthClass.toLocaleString()}</td>
                        </tr>
                    </tbody>
                </ResultTable>
                <div>
                    <b>- 구매한 개수 : {ticketCount.toLocaleString()}장</b><br />
                    <b>- 총 당첨 금액 : {totalPrizes.toLocaleString()}원</b><br />
                    <b>- 수익률 : {profit.toLocaleString()}%</b>
                </div>

                <ButtonWrapper>
                    <Button
                        title="닫기"
                        role="close"
                        onClick={onCloseModal}
                    />
                </ButtonWrapper>
            </ModalContent>
        </ModalWrpper>
    );

}

export default ResultModal;



const ModalWrpper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
`

const ModalTitle = styled.h2`
    text-align: center;
`

const ModalContent = styled.div`
    background-color: white;
    border-radius: 20px; 
    width: calc(50% - 32px);
    padding: 20px 24px 24px;
`

const ResultTable = styled.table`
    width: 100%;
    margin: 30px 0px;

    & th {
        padding: 10px;
        background-color: rgb(222, 222, 222);
    }

    & td {
        padding: 10px;
        text-align: center;
    }
`

const ButtonWrapper = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
`