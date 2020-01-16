import React from 'react';
import { withRouter } from 'react-router';

class News extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.props.clearNews();
        this.topic = this.props.match.params.ticker;
        this.topic === undefined ? this.topic = "STOCK MARKET" : this.topic;
        this.props.getNews(this.topic)

    }

    render() {
        // debugger
        return (
            <div className="news-div">
                {
                    Object.keys(this.props.news).map(id => {
                        return (
                            <a href={this.props.news[id].url} className="news-article">
                               
                                <div key={id}>
                                    <div className="news-story">
                                        <div className="news-source">
                                            {this.props.news[id].source.name}    
                                        </div>
                                        <div className="news-title">
                                            {this.props.news[id].title}
                                        </div>
                                        <div className="news-description">
                                            {this.props.news[id].description.slice(0, 48)}...
                                        </div>
                                    </div>
                                    <div className="news-img">
                                        <img src={this.props.news[id].urlToImage} alt=""/>
                                    </div>
                                </div>
                            </a>
                        );
                    })
                }
            </div>
        );
    }
}

export default withRouter(News);