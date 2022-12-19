import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { LIGHTBLUE } from "../constants/colors";
import { useLoading } from "../context/LoadingProvider";

export default function Button({ buttonText }) {
    const loading = useLoading()
    return (
        <ButtonStyled disabled={loading} type="submit">{
            loading ? <ThreeDots color="white"/> : buttonText}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    margin:3px 36px 25px;
    font-size: 21px;
    line-height: 26px;
    width:calc(100vw - 2 * 36px);
    height: 45px;
    color: white;
    background: ${props => props.disabled? '#b2dfff':LIGHTBLUE};
    border-radius: 5px;
    border: ${LIGHTBLUE};
    div {
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    }
`