import React from "react";
import styled from "styled-components";

function Button(props) {
    const { title, role, onClick } = props;
    return (
        <StyeldButton
            $role={role}
            onClick={onClick}
        >
            {title}
        </StyeldButton>
    );

}

export default Button;


const StyeldButton = styled.button`
    padding : 12px;
    font-size : 16px;
    border: none;
    border-radius : 12px;
    cursor : pointer;

    ${({ $role }) => {
        switch ($role) {
            case 'submit' :
                return `
                    background-color: rgba(248, 251, 109, 0.834);
                    box-shadow: 0px 0px 2px 2px rgb(220, 222, 138);
                    &:active {
                        background-color: rgba(251, 253, 113, 0.834);
                        box-shadow: 0px 0px 2px 2px rgb(196, 197, 122);
                    }
                `
            case 'buy':
                return `
                    color:white;
                    background-color: rgb(57, 137, 236);
                    box-shadow: 0px 0px 2px 2px rgb(48, 119, 206);
                    &:active {  
                        background-color: rgb(50, 120, 205);
                    }
                `
            case 'result':
                return `
                    background-color: white;
                    box-shadow: 0px 0px 2px 2px rgb(224, 98, 79);
                    &:active {
                        box-shadow: 0px 0px 2px 2px rgb(165, 69, 54);
                    }
                `
            case 'reset':
                return `
                    background-color: white;
                    box-shadow: 0px 0px 2px 2px rgb(48, 119, 206);
                    margin-left: auto;
                    &:active {
                        box-shadow: 0px 0px 2px 2px rgb(32, 83, 146);
                    }
                `
            case 'open':
                return `
                    color: white;
                    background-color: rgb(224, 98, 79);
                    box-shadow: 0px 0px 2px 2px rgb(186, 58, 39);
                    &:active {
                        background-color: rgb(205, 88, 70);
                    }
                `
            case 'close':
                return `
                    background-color: rgb(222, 222, 222);
                    box-shadow: 0px 0px 2px 2px rgb(208, 208, 208);
                    &:active {
                        background-color: rgb(207, 207, 207);
                        box-shadow: 0px 0px 2px 2px rgb(195, 195, 195);
                    }
                `
            default :
                return `
                    color: #202020;
                    background-color: rgba(230, 230, 230, 0.834);
                `
        }
    }}
`