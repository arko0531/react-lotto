import { Component } from "react";
import "../../css/Button.css";

class Button extends Component {
    render() {
        const {title, className = '', onClick} = this.props;
        return(
            <button 
                className={`button ${className} || ''`}
                onClick={onClick}
            >
                {title}
            </button>
        );
    }
}

export default Button;