import axios from "axios";
import {
  PROJECT_DETAILS_FAIL,
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_SUCCESS,
  PROJECT_LIST_FAIL,
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
} from "../constants/projectConstants";

export const projectList = () => async (dispatch) => {
  dispatch({
    type: PROJECT_LIST_REQUEST,
  });
  try {
    const { data } = await axios.get("http://127.0.0.1:8000/project/");

    dispatch({
      type: PROJECT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_LIST_FAIL,
      payload: error,
    });
  }
};
export const projectDetailById = (id) => async (dispatch) => {
  console.log("projectBy id @ action");

  dispatch({
    type: PROJECT_DETAILS_REQUEST,
    payload: id,
  });
  try {
    const { data } = await axios.get(`http://127.0.0.1:8000/project/${id}`);

    console.log("projectBy id @ action");
    console.log(data);
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
