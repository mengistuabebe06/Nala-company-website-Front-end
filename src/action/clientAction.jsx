import axios from "axios";
import {
  CLIENT_LIST_FAIL,
  CLIENT_LIST_REQUEST,
  CLIENT_LIST_SUCCESS,
} from "../constants/clientConstants";

export const clientList = () => async (dispatch) => {
  dispatch({
    type: CLIENT_LIST_REQUEST,
  });
  try {
    const { data } = await axios.get("http://127.0.0.1:8000/client/");

    dispatch({
      type: CLIENT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CLIENT_LIST_FAIL,
      payload: error,
    });
  }
};

export const testimonialDetailById = (id) => async (dispatch) => {
  dispatch({ type: PROJECT_DETAILS_REQUEST });
  try {
    const { data } = await axios.get(`http://127.0.0.1:8000/project/${id}`);
    dispatch({
      type: PROJECT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_DETAILS_FAIL,
      payload: error,
    });
  }
};
