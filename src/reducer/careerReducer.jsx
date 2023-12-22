import {
  CAREER_LIST_FAIL,
  CAREER_LIST_REQUEST,
  CAREER_LIST_SUCCESS,
} from "../constants/CareerConstants";

export const careerListReducer = (
  state = { loading: true, career: [] },
  action
) => {
  switch (action.type) {
    case CAREER_LIST_REQUEST:
      return {
        loading: true,
      };
    case CAREER_LIST_SUCCESS:
      return {
        loading: false,
        career: action.payload,
      };
    case CAREER_LIST_FAIL:
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
