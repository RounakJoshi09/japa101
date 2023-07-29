import Cookies from 'js-cookie';
import * as actionTypes from './actionTypes';
import { url } from '@/helpers/route';
export const fetchUser = (payload) => {
    return async (dispatch, getState, api) => {
      dispatch({
        type: actionTypes.FETCH_USER,
      });
      try {
        const token = Cookies.get('authToken');
        let response = await api.post(`${url.BASE_URL}${url.getUser}`,{authToken:token});
        if (response.status === 200) {
          dispatch({
            type: actionTypes.FETCH_USER_SUCCESS,
            payload: response.data.user,
          });
        } else {
          dispatch({
            type: actionTypes.FETCH_USER_FAILURE,
            payload: {},
          });
        }
      } catch (error) {
        console.log(error);
        dispatch({
          type: actionTypes.FETCH_USER_FAILURE,
          payload:{},
        });
      }
    };
  };

export const setUser = (payload) =>{
    return async (dispatch, getState, api) => {
        dispatch({
          type: actionTypes.FETCH_USER_SUCCESS,
          payload
        });
    }
}