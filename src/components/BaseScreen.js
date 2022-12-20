import NavBar from "./NavBar";
import TopBar from "./TopBar";
import styled from "styled-components";
import { useToken } from "../context/TokenProvider";

export default function BaseScreen({children}){
    const token = useToken()
    return (
        <Screen token={token}>
            {token && <TopBar/>}
            {children}
            {token && <NavBar/>}
        </Screen>

    )
}

const Screen = styled.div`
    min-height:100vh;
    padding:70px 0 100px;
    background-color: ${props => props.token? "#F2F2F2":"white" } ;
    > div:has(svg) {
        display:flex;
        justify-content:center;
    }
`