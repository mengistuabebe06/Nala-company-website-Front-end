import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { courseListReducer } from "../reducer/courseReducer";
import { newsListReducer } from "../reducer/newsReducer";
import { serviceListReducer } from "../reducer/serviceReducer";
import {
  projectDetailListReducer,
  projectListReducer,
} from "../reducer/projectReducer";
import { testimonialListReducer } from "../reducer/testimonialReducer";
import { careerListReducer } from "../reducer/careerReducer";
import { clientListReducer } from "../reducer/clientReducer";

const initialState = {};

const reducer = combineReducers({
  CourseList: courseListReducer,
  NewsList: newsListReducer,
  ServiceList: serviceListReducer,
  ProjectList: projectListReducer,
  ProjectDetail: projectDetailListReducer,
  TestimonialList: testimonialListReducer,
  CareerList: careerListReducer,
  ClientList: clientListReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
