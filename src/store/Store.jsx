import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { courseListReducer } from "../reducer/courseReducer";
import { newsListReducer } from "../reducer/newsReducer";

const initialState = {};

const reducer = combineReducers({
  CourseList: courseListReducer,
  NewsList: newsListReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
