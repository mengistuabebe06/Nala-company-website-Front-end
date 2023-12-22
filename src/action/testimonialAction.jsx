import axios from "axios";
import {
  TESTIMONIAL_LIST_FAIL,
  TESTIMONIAL_LIST_REQUEST,
  TESTIMONIAL_LIST_SUCCESS,
} from "../constants/testimonialConstants";

export const testimonialList = () => async (dispatch) => {
  dispatch({
    type: TESTIMONIAL_LIST_REQUEST,
  });
  try {
    const { data } = await axios.get("http://127.0.0.1:8000/testimonial/");

    console.log("TESTIMONIAL_LIST_REQUEST data @ action");
    console.log(data);

    dispatch({
      type: TESTIMONIAL_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TESTIMONIAL_LIST_FAIL,
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
