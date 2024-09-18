import { Component } from "react";
import "../css/ResultModal.css"
import Button from "./ui/Button";

class ResultModal extends Component {
    render() {
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
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>2등</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>3등</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>4등</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>5등</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            총 당첨 금액 :
                        </div>

                    <div className="buttonWrapper">
                        <Button 
                            title = "닫기"
                            className = "modalCloseButton"
                            // onClick = {

                            // }
                        />
                    </div>
                </div>           
            </div>
        );
    }
}

export default ResultModal;