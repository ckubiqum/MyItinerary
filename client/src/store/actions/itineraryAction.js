export const fetchItineraries = cityId => dispatch => {
    fetch('/itinerary-route/' + cityId)
        .then(res => res.json())
        .then(itineraries => dispatch({
            type: "GET_ITINERARIES",
            payload: itineraries
        }))
}

export const fetchAllItineraries = dispatch => {
    fetch('/itinerary-route/')
        .then(res => res.json())
        .then(itineraries => dispatch({
            type: "GET_ITINERARIES",
            payload: itineraries
        }))
}

