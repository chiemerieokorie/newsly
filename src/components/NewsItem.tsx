import React from "react";
import {newsItem} from "../actions";

interface NewsItemProps {
    story: newsItem
}

export const NewsItem = ({story}: NewsItemProps): JSX.Element => {

    const {title, description, urlToImage, url, source} = story;

    return (
        //  onClick={()=> window.open(url, "_blank")} - onClick can be applied to the div below
        <div className="card">
            <img src={urlToImage} className="card-img-top" alt={title}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>


                <div className="d-flex justify-content-between align-items-center border-primary">
                    <small className="text-primary">{source.name}</small>
                    <div className="btn-group">
                        <a type="button" href={url} className="btn btn-sm btn-outline-primary">View</a>

                    </div>

                </div>

            </div>
        </div>


    );
};