import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { LIGHTBLUE } from "../constants/colors";
import { useLoading } from "../context/LoadingProvider";

export default function Button({ buttonText, size, submitFuntion ,dataTest}) {
    const loading = useLoading()
    function handleClick(e) {
        if (submitFuntion) {
            e.preventDefault()
            submitFuntion()
        }
    }

    return (
        <ButtonStyled data-test={dataTest} onClick={e => handleClick(e)} disabled={loading} size={size} type="submit">{
            loading ? <ThreeDots color="white" /> : buttonText}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    margin:${props => props.size === "small" ? "0" : "3px 36px 25px"};
    font-size: inherit;
    line-height: 26px;
    width:${props => props.size === "small" ? "84px" : "inherit"};
    height: ${props => props.size === "small" ? "35px" : "45px"};
    color: white;
    background: ${props => props.disabled ? '#b2dfff' : LIGHTBLUE};
    border-radius: 5px;
    border: ${LIGHTBLUE};
    padding:0;

    div {
        height:100%;
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        svg {
            height:26px;
            width:60px;
        }
    }
`