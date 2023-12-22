import {
  TESTIMONIAL_LIST_FAIL,
  TESTIMONIAL_LIST_REQUEST,
  TESTIMONIAL_LIST_SUCCESS,
} from "../constants/testimonialConstants";

export const testimonialListReducer = (
  state = { loading: true, testimonial: [] },
  action
) => {
  switch (action.type) {
    case TESTIMONIAL_LIST_REQUEST:
      return {
        loading: true,
      };
    case TESTIMONIAL_LIST_SUCCESS:
      return {
        loading: false,
        testimonial: action.payload,
      };
    case TESTIMONIAL_LIST_FAIL:
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
