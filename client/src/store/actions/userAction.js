import { SET_CURRENT_USER } from "./types"


export const addUser = user => dispatch => {
    console.log(user);

    fetch("/users-create-route/", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(user => {
            console.log("userAction: ", user)
            dispatch({
                type: SET_CURRENT_USER,
                payload: user
            });

        })
        .catch(error => {
            console.log(error);
        });
};