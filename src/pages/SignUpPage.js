import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import FormUser from "../components/FormUser"
import { BASE_URL } from "../constants/url"
import { useLoading, useToggleLoading } from "../context/LoadingProvider"

export default function SignUpPage() {
    const [bodySignupInfo, setBodySignupInfo] = useState({ email: "", password: "", name: "", image: "" })
    const loading = useLoading()
    const toggleLoading = useToggleLoading()
    const url = BASE_URL + "auth/sign-up"
    const linkText = "Já tem uma conta? Faça login!"
    const navigate = useNavigate()

    function submitFunction() {
        toggleLoading()

        axios.post(url, bodySignupInfo)
            .then(res => {
                toggleLoading()
                navigate("/")
            })
            .catch(err => {
                toggleLoading()
                alert(err.response.data.message)
               
            })
    }

    return (
        <FormUser submitFunction={submitFunction} route="/" linkText={linkText}>
            <input
                type="email"
                value={bodySignupInfo.email}
                onChange={(e => setBodySignupInfo({ ...bodySignupInfo, email: e.target.value }))}
                placeholder="email" required disabled={loading} />
            <input
                type="password"
                value={bodySignupInfo.password}
                onChange={(e => setBodySignupInfo({ ...bodySignupInfo, password: e.target.value }))}
                placeholder="senha" required disabled={loading} />
            <input
                type="text"
                value={bodySignupInfo.name}
                onChange={(e => setBodySignupInfo({ ...bodySignupInfo, name: e.target.value }))}
                placeholder="nome" required disabled={loading} />
            <input
                type="url"
                value={bodySignupInfo.image}
                onChange={(e => setBodySignupInfo({ ...bodySignupInfo, image: e.target.value }))}
                placeholder="foto" required disabled={loading} />
            <Button buttonText="Cadastrar" />
        </FormUser>
    )
}

