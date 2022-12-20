import axios from "axios";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import Button from "../components/Button";
import HabitCard from "../components/HabitCard";
import { LIGHTBLUE } from "../constants/colors";
import { BASE_URL } from "../constants/url";
import { useToggleLoading } from "../context/LoadingProvider";
import { useToken } from "../context/TokenProvider";

export default function MyHabitsPage() {
    const [addHabit, setAddHabit] = useState(false)
    const [habitText, setHabitText] = useState("")
    const [weekDays, setWeekdays] = useState([])
    const [habitsList, setHabitsList] = useState(undefined)
    const [refresh, setRefresh] = useState(true)
    const token = useToken()
    const toggleLoading = useToggleLoading()
    const config = {
        headers: {
            "Authorization": `Bearer ${token.token}`
        }
    }
    function refreshHabitList() {
        axios.get(BASE_URL + "habits", config)
            .then(res => setHabitsList(res.data))
            .catch(err => console.log(err.response.data.message))
    }
    useEffect(() => refreshHabitList(), [refresh])

    function weekDayHandle(e, i) {
        e.preventDefault()
        if (weekDays.includes(i)) {
            const newWeekdays = weekDays.filter(w => w !== i)
            setWeekdays(newWeekdays)
        } else {
            setWeekdays([...weekDays, i])
        }

    }
    function saveHabit() {
        toggleLoading()
        const body = { name: habitText, days: weekDays }
        axios.post(BASE_URL + "habits", body, config)
            .then(res => {
                setRefresh(r => !r)
                setAddHabit(false)
                toggleLoading()
                setWeekdays([])
                setHabitText("")
            })
            .catch(err => console.log(err.response.data.message))

    }

    function deleteHabit(id) {
        // if (window.confirm("Você quer mesmo deletar esse hábito?")) {
        if (true) {
            axios.delete(BASE_URL + "habits/" + id, config)
                .then(() => setRefresh(r => !r))
                .catch(err => console.log(err.response.data.message))
        }
    }
    if (!habitsList) return <ThreeDots color={LIGHTBLUE} />


    return (
        <>
            <TitleConteiner>
                <h1>Meus hábitos</h1>
                <ButtonHabit onClick={() => setAddHabit(true)}>+</ButtonHabit>
            </TitleConteiner>
            {addHabit &&

                <HabitCard
                    setHabitText={setHabitText}
                    habitText={habitText}
                    weekDayHandle={weekDayHandle}
                    weekDays={weekDays}
                    mode="edit"
                >
                    <div>
                        <span onClick={() => setAddHabit(false)}>Cancelar</span>
                        <Button submitFuntion={saveHabit} buttonText="Salvar" size="small" />
                    </div>

                </HabitCard>
            }

            {habitsList.length > 0 ? habitsList.map((h) => (
                <HabitCard
                    key={h.id}
                    habitText={h.name}
                    weekDays={h.days}
                    mode="list"
                >
                    <ion-icon onClick={() => deleteHabit(h.id)} name="trash-outline"></ion-icon>
                </HabitCard>
            ))
                :
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}
        </>
    )
}


const TitleConteiner = styled.div`
    
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin: 28px 17px;
`
const ButtonHabit = styled.button`
    color:white;
    font-size:27px;
    background-color:${LIGHTBLUE};
    border:${LIGHTBLUE};
    border-radius:5px;
    height:35px;
    padding: 0 12px;

`