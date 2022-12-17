import styled from "styled-components";
import BaseScreen from "../components/BaseScreen";

export default function HistoryPage() {
    return (
        <BaseScreen>
            <Title>
                HistoryPage
            </Title>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </BaseScreen>

    )
}

const Title = styled.h1`
    margin: 28px 17px;
`