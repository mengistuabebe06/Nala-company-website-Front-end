import axios from "axios";
import {} from "../constants/CourseConstants";
import {
  NEWS_CREATE_FAIL,
  NEWS_CREATE_REQUEST,
  NEWS_CREATE_SUCCESS,
  NEWS_LIST_FAIL,
  NEWS_LIST_REQUEST,
  NEWS_LIST_SUCCESS,
} from "../constants/newsConstants";

// BASE_IP = "http://127.0.0.1:8000";

export const newsList = () => async (dispatch) => {
  dispatch({
    type: NEWS_LIST_REQUEST,
  });
  try {
    const { data } = await axios.get("http://127.0.0.1:8000/news/");

    console.log("news data @ action");
    console.log(data);

    dispatch({
      type: NEWS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEWS_LIST_FAIL,
      payload: error,
    });
  }
};

export const createNews = (news) => async (dispatch) => {
  dispatch({ type: NEWS_CREATE_REQUEST });
  try {
    const { data } = await axios.post(`http://127.0.0.1:8000/news/${news}`);
    dispatch({
      type: NEWS_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEWS_CREATE_FAIL,
      payload: error,
    });
  }
};
