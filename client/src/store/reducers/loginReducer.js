import { SET_CURRENT_USER, LOGOUT_SUCCES } from '../actions/types';

const initialState = {
    isAuthenticated: false,
    token: null,
    user: {}
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
            };
        case LOGOUT_SUCCES:
            localStorage.removeItem("token");
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                user: {}
            };

        default: return state;
    }
}