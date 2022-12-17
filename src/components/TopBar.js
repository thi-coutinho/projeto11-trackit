import styled from "styled-components"
import { DARKBLUE } from "../constants/colors"

export default function TopBar(){
    const url = "https://yt3.ggpht.com/ytc/AMLnZu9tYPIG3bxki2LZz-NRrvHtLHRL0-wW95Cjgcr2=s900-c-k-c0x00ffffff-no-rj"
    return (
        <Top>
            <div> TrackIt</div>
            <img src={url} alt="userImage" />

        </Top>

        )
}

const Top = styled.div`
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