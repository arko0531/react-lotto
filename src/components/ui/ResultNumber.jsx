import { Component } from "react";
import "../../css/ResultNumber.css"

class ResultNumber extends Component {
    render() {
        const {number} = this.props;

        return(
            <div className="resultNumber">
                {number}
            </div>
        );
    }
}

export default ResultNumber;