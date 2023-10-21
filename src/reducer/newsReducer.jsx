import {} from "../constants/CourseConstants";
import {
  NEWS_LIST_FAIL,
  NEWS_LIST_REQUEST,
  NEWS_LIST_SUCCESS,
} from "../constants/newsConstants";

export const newsListReducer = (
  state = { loading: true, news: [] },
  action
) => {
  switch (action.type) {
    case NEWS_LIST_REQUEST:
      return {
        loading: true,
      };
    case NEWS_LIST_SUCCESS:
      return {
        loading: false,
        news: action.payload,
      };
    case NEWS_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
