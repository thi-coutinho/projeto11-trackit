import { ThreeDots } from "react-loader-spinner";

export default function Button({ loading, buttonText }) {
    return (
        <button disabled={loading} type="submit">{
            loading ? <ThreeDots color="white"/> : buttonText}
        </button>
    )
}