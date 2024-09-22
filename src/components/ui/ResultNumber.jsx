import React from "react";
import "../../css/ResultNumber.css"

function ResultNumber(props) {
    const {number} = props;

    return(
        <div className="resultNumber">
            {number}
        </div>
    );
    
}

export default ResultNumber;