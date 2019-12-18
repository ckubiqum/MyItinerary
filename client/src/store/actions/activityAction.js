export const fetchActivities = itineraryId => dispatch => {
    console.log("itinID: ", itineraryId)
    fetch('/activity-route/' + itineraryId)
        .then(res => res.json())
        .then(activities => dispatch({
            type: "GET_ACTIVITIES",
            payload: activities
        }))
}

export const fetchAllActivities = dispatch => {
    fetch('/activity-route/')
        .then(res => res.json())
        .then(activities => dispatch({
            type: "GET_ACTIVITIES",
            payload: activities
        }))
}

