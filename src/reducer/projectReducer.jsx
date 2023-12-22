import {
  SERVICE_LIST_FAIL,
  SERVICE_LIST_REQUEST,
  SERVICE_LIST_SUCCESS,
} from "../constants/ServiceConstants";
import {
  PROJECT_DETAILS_FAIL,
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_SUCCESS,
  PROJECT_LIST_FAIL,
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
} from "../constants/projectConstants";

export const projectListReducer = (
  state = { loading: true, projects: [] },
  action
) => {
  switch (action.type) {
    case PROJECT_LIST_REQUEST:
      return {
        loading: true,
      };
    case PROJECT_LIST_SUCCESS:
      return {
        loading: false,
        projects: action.payload,
      };
    case PROJECT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const projectDetailListReducer = (
  state = { loading: true, projectbyID: [] },
  action
) => {
  switch (action.type) {
    case PROJECT_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case PROJECT_DETAILS_SUCCESS:
      return {
        loading: false,
        projectbyID: action.payload,
      };
    case PROJECT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
