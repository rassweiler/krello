import { combineReducers } from "redux";
import boardReducer from "./boardReducer";
import boardListReducer from "./boardListReducer";
import listReducer from "./listReducer";
import cardReducer from "./cardReducer";

export default combineReducers({
	boards: boardReducer,
	lists: listReducer,
	cards: cardReducer,
	boardList: boardListReducer
});
