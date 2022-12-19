import NavBar from "./NavBar";
import TopBar from "./TopBar";
import styled from "styled-components";

export default function BaseScreen(props){
    return (
        <Screen>
            <TopBar/>
            {props.children}
            <NavBar/>
        </Screen>

    )
}

const Screen = styled.div`
    height:100vh;
    padding:70px 0;
    background-color: #F2F2F2;
`