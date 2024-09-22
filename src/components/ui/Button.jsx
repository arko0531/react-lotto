import React from "react";
import "../../css/Button.css";

function Button(props) {
    const {title, className, onClick} = props;
    return(
        <button 
            className={className}
            onClick={onClick}
        >
            {title}
        </button>
    );
    
}

export default Button;