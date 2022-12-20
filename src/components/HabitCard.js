import styled from "styled-components"
import { DARKGREY, LIGHTBLUE, LIGHTERGREY } from "../constants/colors"

export default function HabitCard({ setHabitText, habitText, weekDayHandle, weekDays, children, mode, dataTest }) {


    return (
        <HabitForm data-test={dataTest} mode={mode}>
            <input
                data-test={mode === "list" ? "habit-name" : "habit-name-input"}
                type="text"
                placeholder="nome do habito"
                value={habitText}
                onChange={(e) => {
                    if (setHabitText) setHabitText(e.target.value)
                }}
                disabled={mode === "list"}
            />
            <br />
            <>{["D", "S", "T", "Q", "Q", "S", "S"].map((d, i) => (
                <WeekDayButton
                    data-test="habit-day"
                    onClick={(e) => {
                        if (weekDayHandle) {
                            weekDayHandle(e, i)
                        }
                    }}
                    key={i}
                    selected={weekDays.includes(i)}
                    disabled={mode === "list"}
                >{d}</WeekDayButton>
            ))}</>
            {children}
        </HabitForm>
    )
}

const HabitForm = styled.form`
    position: relative;
    z-index:1;
    width:calc(100vw - 34px);
    margin: 10px 17px;
    padding:${props => props.mode === "list" ? "13px 18px" : "18px"};
    /* min-height: 180px; */
    background-color:white;
    border-radius: 5px;
    input[type=text]{
        font-size:20px;
        color:${DARKGREY};
        width:${props => props.mode === "list" ? "calc(100% - 33px)" : "100%"};
        height:45px;
        border:${props => props.mode === "list" ? "none" : `1px solid ${LIGHTERGREY}`};
        border-radius:5px;
        padding-left:${props => props.mode === "list" ? "0" : "11px"};;
        &::placeholder{
            font-size:20px;
            color:${LIGHTERGREY};
        }
    }
    > div {
        color:${LIGHTBLUE};
        margin-top:32px;
        display:flex;
        justify-content:flex-end;
        align-items:center;
        gap: 23px;
    }
    ion-icon {
        position:absolute;
        top:11px;
        right:10px;
        font-size:13px;
    }
`
const WeekDayButton = styled.button`
    --fontcolor: ${props => props.selected ? "white" : LIGHTERGREY};
    font-size:20px;
    width:30px;
    height:30px;
    color:  ${props => props.selected ? "white" : LIGHTERGREY};
    background:${props => props.selected ? LIGHTERGREY : "white"};
    border:1px solid ${LIGHTERGREY};
    border-radius:5px;
    margin: 8px 4px 0px 0;
`