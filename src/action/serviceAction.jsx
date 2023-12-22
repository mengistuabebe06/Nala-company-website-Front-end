import axios from "axios";
import {
  SERVICE_LIST_FAIL,
  SERVICE_LIST_REQUEST,
  SERVICE_LIST_SUCCESS,
} from "../constants/ServiceConstants";

// BASE_IP = "http://127.0.0.1:8000";

export const serviceList = () => async (dispatch) => {
  dispatch({
    type: SERVICE_LIST_REQUEST,
  });
  try {
    const { data } = await axios.get("http://127.0.0.1:8000/course/");

    console.log("Service data @ action");
    console.log(data);

    dispatch({
      type: SERVICE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SERVICE_LIST_FAIL,
      payload: error,
    });
  }
};
