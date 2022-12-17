import FormUser from "../components/FormUser"
export default function LoginPage() {
    const linkText = "Não tem uma conta? Cadastre-se!"
    return (
        <FormUser route="/cadastro" linkText={linkText}>
            <input type="email" placeholder="email" required />
            <input type="password" placeholder="senha" required />
            <button>Entrar</button>
        </FormUser>
    )
}