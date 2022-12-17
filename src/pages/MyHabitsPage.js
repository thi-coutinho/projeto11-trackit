import { useState } from "react";
import styled from "styled-components";
import BaseScreen from "../components/BaseScreen";
import { LIGHTBLUE, LIGHTERGREY } from "../constants/colors";

export default function MyHabitsPage() {
    const [addHabit, setAddHabit] = useState(false)
    return (
        <BaseScreen>
            <TitleConteiner>
                <h1>Meus hábitos</h1>
                <ButtonHabit onClick={() => setAddHabit(true)}>+</ButtonHabit>
            </TitleConteiner>
            {addHabit &&
                
            <AddHabitCard>
                <input type="text" placeholder="nome do habito" />
                <br />
                <>{["D", "S", "T", "Q", "Q", "S", "S"].map((d, i) => (
                    <button key={i}>{d}</button>
                ))}</>
                <div>
                    <span onClick={() => setAddHabit(false)}>Cancelar</span>
                    <ButtonSave>Salvar</ButtonSave>
                </div>

            </AddHabitCard>
            }

            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </BaseScreen>
    )
}

const AddHabitCard = styled.form`
    width:calc(100vw - 34px);
    margin: 0 17px;
    padding:18px;
    min-height: 180px;
    background-color:white;
    border-radius: 5px;
    input[type=text]{
        width:100%;
        height:45px;
        border:1px solid ${LIGHTERGREY};
        border-radius:5px;
        padding-left:11px;
        &::placeholder{
            font-size:20px;
            color:${LIGHTERGREY};
        }
    }
    div {
        color:${LIGHTBLUE};
        margin-top:32px;
        display:flex;
        justify-content:flex-end;
        align-items:center;
        gap: 23px;
    }
    > button{
        font-size:20px;
        width:30px;
        height:30px;
        color: ${LIGHTERGREY};
        background:white;
        border:1px solid ${LIGHTERGREY};
        border-radius:5px;
        margin: 8px 4px 0px 0;
    }


`
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
const ButtonSave = styled(ButtonHabit)`
    font-size:16px;
`