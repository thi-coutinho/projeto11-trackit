import styled from "styled-components"
import { LIGHTBLUE, LIGHTERGREY } from "../constants/colors"
import logo from "../constants/logo.svg"
import { Link } from "react-router-dom"


export default function FormUser({ route, linkText, submitFunction, children }) {

    return (
        <FlexRow>
            <img src={logo} alt="logo" />
            <FormLogin onSubmit={(e) => {
                e.preventDefault()
                submitFunction()
            }}>
                {children}
            </FormLogin>
            <Link to={route}>{linkText}</Link>
        </FlexRow>
    )

}

const FlexRow = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin: 68px 0;
    img {
        max-width:200px;
        margin-bottom:32px;
    }
    a {
        color:${LIGHTBLUE}
    }
`
const FormLogin = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-family:'Lexend Deca', sans-serif;
    input {
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-size:20px;
        width:calc(100vw - 2 * 36px);
        height:45px;
        padding-left:11px;
        margin:3px 36px;
        &::placeholder{
            color: ${LIGHTERGREY};
        }
    }
`