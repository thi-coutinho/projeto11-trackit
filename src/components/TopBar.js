import styled from "styled-components"
import { DARKBLUE } from "../constants/colors"
import { useToken } from "../context/TokenProvider"

export default function TopBar(){
    const tokenObj = useToken()
    const url = tokenObj.imageURL
    return (
        <Top data-test="header">
            <div> TrackIt</div>
            <img src={url} alt="userImage" />

        </Top>

        )
}

const Top = styled.div`
    z-index:2;
    position:fixed;
    top:0;
    background:${DARKBLUE};
    display:flex;
    width:100vw;
    padding:0 18px;
    height:70px;
    font-size:39px;
    color:white;
    justify-content:space-between;
    align-items:center;
    box-shadow:0px 4px 4px rgba(0, 0, 0, 0.15);
    div {
        font-family: 'Playball', cursive;
    }
    img {
        border-radius:50%;
        width:51px;
        height:51px;
    }


`