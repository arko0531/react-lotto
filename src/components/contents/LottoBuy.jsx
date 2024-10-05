import React, {useRef} from "react";
import Button from "../ui/Button";
import styled from "styled-components";

function LottoBuy (props) {
    const { price, lottoControl, onLottoBuy, onPriceChange, onHistoryVisible, onOpenModal, onReset, winningTimer } = props;
    const focusRef = useRef();
    
    const handleKeyPress = (event) => {
        if(event.key === 'Enter')
            onLottoBuy();
      }

    return(
        <div>
            <h3>구매하기 (1장 : 1,000원)</h3>
            <BuyInputWrapper>
                <BuyInput 
                    type="text" 
                    placeholder="1,000원 단위로 금액을 입력해 주세요." 
                    value={price}
                    onChange={onPriceChange}
                    ref={focusRef} 
                    onKeyDown={handleKeyPress}
                />

                <Button 
                    title = "구매"
                    role = "buy"
                    onClick = {onLottoBuy}
                />
            </BuyInputWrapper>

            <div>
                {lottoControl ? 
                    <>
                        <WinningTime>
                            <div>당첨 번호 발표까지 남은 시간</div>
                            <div>{winningTimer}</div>
                        </WinningTime>

                        <ResultButtonWrapper> 
                            <Button 
                                title = "번호 확인"
                                role = "result"
                                onClick = {onHistoryVisible}
                            />
                            <Button 
                                title = "결과 확인"
                                role = "open"
                                onClick = {onOpenModal}
                            />
                            <Button 
                                title = "초기화"
                                role = "reset"
                                onClick = {onReset}
                            />      
                        </ResultButtonWrapper>
                    </>
                    : ''
                }
                  
            </div>
        </div>
    );
}

export default LottoBuy;


const BuyInputWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 1vw;
`

const BuyInput = styled.input`
    font-size: 14px;
    width: 30%;
    height: 36px;
    padding: 5px 20px;
    border: 1px solid gray;
    border-radius: 14px;
`

const ResultButtonWrapper = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    gap: 1vw;
`

const WinningTime = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    & div {
        margin-left: auto;
    }
`
