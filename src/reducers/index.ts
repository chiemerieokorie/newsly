import {combineReducers} from "redux";
import {newsItem, getNewsAction} from "../actions";
import {actionTypes} from "../ENUM";

export interface storeState {
  news : newsItem[]
}

const news = (state: newsItem[] = [], action: getNewsAction) =>{
  switch (action.type) {
    case actionTypes.getNews:
      return action.payload;
    default:
      return state;
  }
};

export const reducers = combineReducers<storeState>({news});