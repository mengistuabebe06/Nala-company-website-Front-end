import axios from "axios";
import {
  CAREER_LIST_FAIL,
  CAREER_LIST_REQUEST,
  CAREER_LIST_SUCCESS,
} from "../constants/CareerConstants";

export const careerList = () => async (dispatch) => {
  dispatch({
    type: CAREER_LIST_REQUEST,
  });
  try {
    const { data } = await axios.get("http://127.0.0.1:8000/career/");

    console.log("CAREER_LIST data @ action");
    console.log(data);

    dispatch({
      type: CAREER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CAREER_LIST_FAIL,
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
