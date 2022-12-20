import styled from "styled-components";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br'
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import { useToken } from "../context/TokenProvider";
import { ThreeDots } from "react-loader-spinner";
import { LIGHTBLUE } from "../constants/colors";
import TodayHabitCard from "../components/TodayHabitCard";
import { useProgress, useSetProgress } from "../context/ProgressProvider";
import { useLoading } from "../context/LoadingProvider";


export default function TodayPage() {
    const [listToday, setListToday] = useState(undefined)
    const token = useToken()
    const setProgress = useSetProgress()
    const progress = useProgress()
    const loading = useLoading()
    const config = {
        headers: {
            "Authorization": `Bearer ${token.token}`
        }
    }
    dayjs.locale("pt-br")
    const today = dayjs().format('dddd, DD/MM')
    const todayString = today[0].toUpperCase() + today.slice(1)

    useEffect(() => {
        axios.get(BASE_URL + "habits/today", config)
            .then(res => {
                setListToday(res.data)
                const totalHabitsToday = res.data.length
                const doneHabitsToday = res.data.filter(h => h.done).length
                setProgress({ doneHabitsToday, totalHabitsToday })
            })
            .catch(err => console.log(err.response.data.message))
    }, [loading])

    if (!listToday) {
        return <ThreeDots color={LIGHTBLUE} />
    }
    return (
        <>
            <Title data-test="today">
                {todayString}
            </Title>
            {progress.doneHabitsToday == 0 ?
                    <Subgray data-test="today-counter">Nenhum hábito concluído ainda</Subgray> :
                    <Subgreen data-test="today-counter">{Math.floor( 100 * progress.doneHabitsToday/progress.totalHabitsToday)}% dos hábitos concluídos</Subgreen>}
            {listToday.map(h => (
                <TodayHabitCard
                    key={h.id}
                    id={h.id}
                    name={h.name}
                    done={h.done}
                    currentSequence={h.currentSequence}
                    highestSequence={h.highestSequence}
                />))}
        </>

    )
}

const Title = styled.h1`
    margin: 28px 17px 4px;
`
const Subgray = styled.p`
    padding:0;
    margin:0 17px 4px;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    color: #BABABA;
`
const Subgreen = styled.p`
    margin:0 17px 4px;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    color: #8FC549;
`