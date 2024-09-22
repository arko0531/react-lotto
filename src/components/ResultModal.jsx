import React from "react";
import "../css/ResultModal.css"
import Button from "./ui/Button";

function ResultModal(props) {
    const {onCloseModal, totalRank, price, ticketCount} = props;

    // 총 당첨금 : 30,000,000,000
    const prizes = {
        firstClass: totalRank.firstClass > 0 ? Math.floor(22500000000 / totalRank.firstClass) : 0, // 75%
        secondClass: totalRank.secondClass > 0 ? Math.floor(3750000000 / totalRank.secondClass) : 0, // 12.5%
        thirdClass: totalRank.thirdClass > 0 ? Math.floor(3750000000 / totalRank.thirdClass) : 0, // 12.5%
        fourthClass: totalRank.fourthClass > 0 ? 50000 * totalRank.fourthClass : 0,
        fifthClass: totalRank.fifthClass > 0 ? 5000 * totalRank.fifthClass : 0
    }

    // 총 당첨 금액
    const totalPrizes = prizes.firstClass + prizes.secondClass + prizes.thirdClass + prizes.fourthClass + prizes.fifthClass;

    // 수익률
    const profit = ((totalPrizes - price) / price) * 100;


    return(
        <div className="modalWrapper">
            <div className="modalContent">
                <h2 className="modalTitle">당첨 통계</h2>

                <div>
                    <table className="resultTable">
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
                    </table>
                </div>
                <div>
                    <b>- 구매한 개수 : {ticketCount.toLocaleString()}장</b><br />
                    <b>- 총 당첨 금액 : {totalPrizes.toLocaleString()}원</b><br/>
                    <b>- 수익률 : {profit.toLocaleString()}%</b>
                </div>

                <div className="buttonWrapper">
                    <Button 
                        title = "닫기"
                        className = "modalCloseButton"
                        onClick = {onCloseModal}
                    />
                </div>
            </div>           
        </div>
    );
    
}

export default ResultModal;