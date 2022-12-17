import { Link } from "react-router-dom"
import styled from "styled-components"
import { LIGHTBLUE } from "../constants/colors"

export default function Navbar(){
    return (
        <Menu>
            <Link to={"/habitos"}><div> Hábitos</div></Link>
            <Link to={"/hoje"}><button>Hoje</button></Link>
            <Link to={"/historico"}><div> Histórico</div></Link>
        </Menu>

        )
}

const Menu = styled.div`
    position:fixed;
    bottom:0;
    background:white;
    display:flex;
    width:100vw;
    padding:0 18px;
    height:70px;
    font-size:18px;
    color:${LIGHTBLUE};
    justify-content:space-between;
    align-items:center;
    button {
        position:relative;
        top:-25px;
        font:inherit;
        height:91px;
        width:91px;
        background-color:${LIGHTBLUE};
        color:white;
        border-radius:50%;
        border:${LIGHTBLUE};
    }
    a {
        text-decoration:none;
        color:inherit;
    }

`