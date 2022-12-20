import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import FormUser from "../components/FormUser"
import { BASE_URL } from "../constants/url"
import { useLoading, useToggleLoading } from "../context/LoadingProvider"
import { useSetToken } from "../context/TokenProvider"

export default function LoginPage() {
    const linkText = "Não tem uma conta? Cadastre-se!"
    const [bodyLoginInfo, setBodyLoginInfo] = useState({ email: "", password: "" })
    const loading = useLoading()
    const setToken = useSetToken()
    const navigate = useNavigate()
    const toggleLoading = useToggleLoading()

    function submitFunction() {
        toggleLoading()
        axios.post(BASE_URL + "auth/login", bodyLoginInfo)
            .then(res => {
                setToken({ token: res.data.token, imageURL: res.data.image })
                toggleLoading()
                navigate("/hoje")
            })
            .catch(err => {
                alert(err.response.data.message)
                toggleLoading()
            })
    }
    return (
        <FormUser route="/cadastro" submitFunction={submitFunction} linkText={linkText} dataTest="signup-link">
            <input
                data-test="email-input"
                type="email"
                placeholder="email"
                value={bodyLoginInfo.email}
                onChange={(e) => setBodyLoginInfo({ ...bodyLoginInfo, email: e.target.value })}
                disabled={loading}
                required
            />
            <input
                type="password"
                data-test="password-input" 
                placeholder="senha"
                value={bodyLoginInfo.password}
                onChange={(e) => setBodyLoginInfo({ ...bodyLoginInfo, password: e.target.value })}
                disabled={loading}
                required
            />
            <Button buttonText="Entrar" dataTest="login-btn" />
        </FormUser>
    )
}