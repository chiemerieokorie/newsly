import API from "../API";
import {Dispatch} from "redux";
import {actionTypes} from "../ENUM";

export interface newsItem {
    title: string,
    description:string,
    url:string,
    urlToImage:string
    source: {
        id: string | null;
        name: string
    }
}

export interface getNewsAction {
    type: actionTypes.getNews,
    payload: newsItem[]
}

interface GetNewsResponseInterface {
    articles: newsItem[]

}

export const getNews = () => async (dispatch:Dispatch) =>{

    const {data}= await API.get<GetNewsResponseInterface>("");

    console.log(data.articles);
    dispatch<getNewsAction>({type:actionTypes.getNews, payload: data.articles})
};

