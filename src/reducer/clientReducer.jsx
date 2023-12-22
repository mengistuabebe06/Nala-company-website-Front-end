import { CLIENT_LIST_FAIL, CLIENT_LIST_REQUEST, CLIENT_LIST_SUCCESS } from "../constants/clientConstants";

  export const clientListReducer = (
    state = { loading: true, client: [] },
    action
  ) => {
    switch (action.type) {
      case CLIENT_LIST_REQUEST:
        return {
          loading: true,
        };
      case CLIENT_LIST_SUCCESS:
        return {
          loading: false,
          client: action.payload,
        };
      case CLIENT_LIST_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  // export const projectDetailListReducer = (
  //   state = { loading: true, project: [] },
  //   action
  // ) => {
  //   switch (action.type) {
  //     case PROJECT_DETAILS_REQUEST:
  //       return {
  //         loading: true,
  //       };
  //     case PROJECT_DETAILS_SUCCESS:
  //       return {
  //         loading: false,
  //         project: action.payload,
  //       };
  //     case PROJECT_DETAILS_FAIL:
  //       return {
  //         loading: false,
  //         error: action.payload,
  //       };
  //     default:
  //       return state;
  //   }
  // };
  