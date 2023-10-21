import axios from "axios";
import {
  COURSE_LIST_FAIL,
  COURSE_LIST_REQUEST,
  COURSE_LIST_SUCCESS,
} from "../constants/CourseConstants";

// BASE_IP = "http://127.0.0.1:8000";

export const courseList = () => async (dispatch) => {
  dispatch({
    type: COURSE_LIST_REQUEST,
  });
  try {
    const { data } = await axios.get("http://127.0.0.1:8000/course/");

    console.log("course data @ action");
    console.log(data);

    dispatch({
      type: COURSE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COURSE_LIST_FAIL,
      payload: error,
    });
  }
};
