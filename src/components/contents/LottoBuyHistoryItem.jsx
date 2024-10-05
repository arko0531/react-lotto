import React from "react";
import ResultNumber from "../ui/ResultNumber";
import styled from "styled-components";
function LottoBuyHistoryItem(props) {
    const {resultNum} = props;
        
    return(
        <ReusltNumberWrapper>
            {resultNum.map((num, index) => (
                <ResultNumber
                    key={index}
                    number={num}
                />
            ))}
        </ReusltNumberWrapper>
    );
    
}
export default LottoBuyHistoryItem;


const ReusltNumberWrapper = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2vw;
    align-items: center;
`