import React from "react"
import {getNews} from "../actions";
import {storeState} from "../reducers";
import {connect} from "react-redux";
import {newsItem} from "../actions";
import {NewsItem} from "./NewsItem";

interface _AppProps {
    getNews: () => {}
    news: newsItem[]
}

export class _App extends React.Component<_AppProps> {

    renderNewsList = () => {
        return this.props.news.map((story: newsItem) => {
            return <NewsItem story={story} key={story.url}/>
        })
    };

    componentDidMount(): void {
        this.props.getNews();
    }


    render(): JSX.Element {
        return (
            <div>
                <div className="container">

                    <nav className="navbar">
                        <a href="/" className="navbar-brand">News.ly : Security </a>
                        <span className="navbar-text text-primary text-large ">

                           <a  href=""> Okorie Chiemerie (Chief)</a>

                            <a className=" nav-link fab fa-twitter" href="https://twitter.com/chief_emerie" />

                            <a className=" nav-link fab fa-instagram" href="https://www.instagram.com/chief.emerie/" />

                        </span>
                    </nav>

                    <div className="card-columns">
                        {this.renderNewsList()}
                    </div>
                </div>
            </div>


        )
    };
}

const mapStateToProps = (state: storeState): { news: newsItem[] } => {
    return state;
};

export const App = connect(mapStateToProps, {getNews})(_App);
