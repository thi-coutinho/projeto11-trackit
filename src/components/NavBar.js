import { Link } from "react-router-dom"
import styled from "styled-components"
import { LIGHTBLUE } from "../constants/colors"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useProgress } from "../context/ProgressProvider";

export default function NavBar() {
    const progress = useProgress()

    return (
        <Menu  data-test="menu">
            <div>
                <Link data-test="habit-link" to={"/habitos"}><div> Hábitos</div></Link>
            </div>

            <Link data-test="today-link" to={"/hoje"}>
                <CircularProgressbar
                    value={progress ? Math.floor(100 * progress.doneHabitsToday / progress.totalHabitsToday) : 0}
                    strokeWidth={10}
                    text="Hoje"
                    minValue={0}
                    styles={buildStyles({
                        textColor: "white",
                        pathColor: "white",
                        trailColor: LIGHTBLUE,
                        textSize: "19px",
                    })}
                />
            </Link>

            <div>
                <Link data-test="history-link" to={"/historico"}><div> Histórico</div></Link>
            </div>
        </Menu>

    )
}

const Menu = styled.div`
    z-index:2;
    position:fixed;
    bottom:0;
    background:white;
    display:flex;
    width:100vw;
    padding:0 18px;
    height:70px;
    font-size:18px;
    color:${LIGHTBLUE};
    /* justify-content:space-between; */
    gap:20px;
    align-items:center;
    & :nth-child(2) {
        position:relative;
        top:-25px;
        font:inherit;
        height:91px;
        width:91px;
        padding:5px;
        background-color:${LIGHTBLUE};
        border-radius:50%;
        border:${LIGHTBLUE};
    }
    p {
        color:white;
    }
    a {
        text-decoration:none;
        color:inherit;
    }

`