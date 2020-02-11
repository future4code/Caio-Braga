import axios from "axios";
import { push } from "connected-react-router";

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/futureX/caioeduardo"

export const login = (email, password) => async (dispatch) => {

    const loginInfo = {
        email: email,
        password: password
    }

    try {
        const response = await axios.post(`${baseURL}/login`, loginInfo)

        window.localStorage.setItem("token", response.data.token);

        dispatch(push("/trips/list"))
        
    } catch (error) {
        console.log(error);
        window.alert("Erro no login")
    }
}