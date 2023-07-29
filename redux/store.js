import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "../redux/rootReducer";
import get from "lodash/get";
import {url} from '@/helpers/route';
import Cookies from "js-cookie";
const authToken = Cookies.get('authToken');

const _ = { get };

/* This is creating an instance of axios. */
const axiosInstance = axios.create({
  baseURL: url.BASE_URL,
  headers:{
    Authorization:`Bearer ${authToken}`,
    "Content-Type":'application/json'
}
});

/* This is creating a store enhancer that will allow us to use Redux DevTools. */
const enhancers = compose(
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
);
let store;
store = createStore(reducers, enhancers);

/* This is interceptor for axios. It will add the Authorization header to the request. */
axiosInstance.interceptors.request.use(async function(config) {
  let credentials = authToken;
  config.headers.Authorization =
    credentials  ? `Bearer ${credentials}` : "";
     return config;
});

export default store;
