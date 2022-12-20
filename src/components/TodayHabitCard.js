import axios from "axios"
import styled from "styled-components"
import { DARKGREY, LIGHTGREY } from "../constants/colors"
import { BASE_URL } from "../constants/url"
import { useToggleLoading } from "../context/LoadingProvider"
import { useToken } from "../context/TokenProvider"

export default function TodayHabitCard({ name, id, currentSequence, highestSequence, done }) {
    const token = useToken()
    const toggleLoading = useToggleLoading()
    const config = {
        headers: {
            "Authorization": `Bearer ${token.token}`
        }
    }
    function checkHabit() {
        toggleLoading()
        const link = `habits/${id}/`+ (done? "uncheck":"check")
        axios.post(BASE_URL + link, {}, config)
            .then(() => {
                toggleLoading()
            })
            .catch(err => console.log(err.response.data.message))
    }
    return (
        <Conteiner data-test="today-habit-container" done={done} record={currentSequence === highestSequence}>
            <h1 data-test="today-habit-name">{name}</h1>
            <h2 data-test="today-habit-sequence">Sequência atual: <span> {currentSequence} dia{currentSequence > 1 ? "s" : ""}</span></h2>
            <h2 data-test="today-habit-record" >Seu recorde: <span> {highestSequence} dia{highestSequence > 1 ? "s" : ""}</span></h2>
            <ion-icon data-test="today-habit-check-btn" onClick={() => checkHabit()} name="checkbox"></ion-icon>
        </Conteiner>
    )
}

const Conteiner = styled.div`
    position: relative;
    z-index:1;
    width:calc(100vw - 34px);
    margin: 10px 17px;
    padding:18px;
    background-color:white;
    border-radius: 5px;
    h1 {
        font-size:20px;
        color:${DARKGREY};
        width:"100%";
        line-height:25px;
        margin-bottom:9px;
    }
    h2 {
        color:${DARKGREY};
        font-size:13px;
        line-height:16px;
        margin-top:2px;
        display:flex;
        span {
            color:${props => props.done ? "#8FC549" : DARKGREY};
            margin: 0 2px;
        }
    &:nth-child(3){
            span {
                margin: 0 2px;
                color:${props => props.record ? "#8FC549" : DARKGREY};
            }
        }
    }
    ion-icon {
        color:${props => props.done ? "#8FC549" : LIGHTGREY};
        position:absolute;
        top:13px;
        right:13px;
        font-size:69px;
    }
`