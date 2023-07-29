import * as actionTypes from './actionTypes';

const initialState = {
    user : undefined,
    fetchingUserInformation:true
}

const userReducer = (state = initialState, action) => {

        switch(action.type)
        {
            case actionTypes.FETCH_USER:
                return {
                    ...state,
                    fetchingUserInformation:false,
                    user:action.payload
                };
            case actionTypes.FETCH_USER_SUCCESS:
                return {
                    ...state,
                    fetchingUserInformation:false,
                    user:action.payload
                }
            case actionTypes.FETCH_USER_FAILURE:
                return {
                    ...state,
                    fetchingUserInformation:false,
                    user:action.payload
                }
            default: return initialState;
        }
}
export default userReducer;