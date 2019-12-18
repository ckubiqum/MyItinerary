import axios from "axios";
import { SET_CURRENT_USER, LOGOUT_SUCCES } from '../actions/types';


export const Login = ({ username, password }) => dispatch => {
    //* Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    console.log("inside action signing user");
    //* Request body
    const body = JSON.stringify({ username, password });
    axios
        .post("/auth", body, config)
        .then(res =>
            dispatch({
                type: SET_CURRENT_USER,
                payload: res.data
            })
        )
};

//Logout function en loginAction.js
export const logout = () => {
    return {
        type: LOGOUT_SUCCES
    };
}