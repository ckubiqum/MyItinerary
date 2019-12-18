import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";
import activityReducer from "./activityReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
    cities: cityReducer,
    itineraries: itineraryReducer,
    activities: activityReducer,
    user: loginReducer,
});
export default rootReducer;