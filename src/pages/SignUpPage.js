import axios from "axios"
import { useState } from "react"
import Button from "../components/Button"
import FormUser from "../components/FormUser"
import { BASE_URL } from "../constants/url"

export default function SignUpPage() {
    const [bodySignupInfo, setBodySignupInfo] = useState({ email:"", password:"", name:"", image:"" })
    const [loading,setLoading] = useState(false)
    const url = BASE_URL + "auth/sign-up"
    const linkText = "Já tem uma conta? Faça login!"

    function submitFunction() {
        console.log(bodySignupInfo)
        setLoading(true)
        axios.post(url,bodySignupInfo)
            .then(res=>{
                setLoading(false)
                console.log(res)
            })
            .catch(err=>console.log(err))
            setBodySignupInfo({ email:"", password:"", name:"", image:"" })
    }

    return (
        <FormUser submitFunction={submitFunction} route="/" linkText={linkText}>
            <input
                type="email"
                value={bodySignupInfo.email}
                onChange={(e=> setBodySignupInfo({...bodySignupInfo,email:e.target.value}))}
                placeholder="email" required disabled={loading}/>
            <input
                type="password"
                value={bodySignupInfo.password}
                onChange={(e=> setBodySignupInfo({...bodySignupInfo,password:e.target.value}))}
                placeholder="senha" required disabled={loading} />
            <input
                type="text"
                value={bodySignupInfo.name}
                onChange={(e=> setBodySignupInfo({...bodySignupInfo,name:e.target.value}))}
                placeholder="nome" required disabled={loading} />
            <input
                type="url"
                value={bodySignupInfo.image}
                onChange={(e=> setBodySignupInfo({...bodySignupInfo,image:e.target.value}))}
                placeholder="foto" required disabled={loading} />
            <Button loading={loading} buttonText="Cadastrar"/>
        </FormUser>
    )
}

