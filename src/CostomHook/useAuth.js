import { useContext } from "react"
import { AuthContext } from "../component/Context/AuthProvider"

const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth