import React, {useRef} from "react";
import InputNumber from "../ui/InputNumber";
import Button from "../ui/Button";
import styled from "styled-components";

function LottoNumber (props) {
    const {inputNumbers, onChangeNumber, onSubmit} = props;
    const inputRef = useRef([]);

    const handleKeyPress = (event, index) => {
        if(event.key === 'Enter') {
            if (index <= 5)
                inputRef.current[index + 1].focus();
            if (index === 6)
                onSubmit();
        }
            
      }
    

    return(
        <div>
            <h3>당첨 번호 입력</h3>
            <NumberWrapper>
                {inputNumbers.slice(0,6).map((number, index) => (
                    <InputNumber 
                        key={index}
                        inputNumber={number}
                        onChangeNumber={onChangeNumber}
                        index={index}
                        ref={el => (inputRef.current[index] = el)}
                        onKeyDown={(event) => handleKeyPress(event, index)}
                    />
                ))}
            <PlusText>+</PlusText>
                <InputNumber 
                    key={6}
                    inputNumber={inputNumbers[6]}
                    onChangeNumber={onChangeNumber}
                    index={6}
                    ref={el => (inputRef.current[6] = el)}
                    onKeyDown = {(event) => handleKeyPress(event, 6)}
                />
            </NumberWrapper>
            <PrizeText>
                <p>총 당첨금 : 30,000,000,000원</p>

                <Button 
                    title="번호 저장"
                    role="submit"
                    onClick = {onSubmit}   
                />
            </PrizeText>
        </div>
    );
    
}

export default LottoNumber;


const NumberWrapper = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1vw;
    align-items: center;
`

const PlusText = styled.div`
    font-size: 3vw;
`

const PrizeText = styled.div`
    margin-top: 40px;
    text-align: center;
`