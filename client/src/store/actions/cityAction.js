export const fetchCities = () => dispatch => {
    fetch('/cities-route/all')
        .then(res => res.json())
        .then(cities => dispatch({
            type: "GET_CITIES",
            payload: cities
        }))
};


export const postCity = (data) => dispatch => {
    fetch.post("/cities-route/", {
        body: data //{city: "", country: ""}
    })
        .then(res => res.json())
        .then(cities => dispatch({
            payload: cities
        }))
}





