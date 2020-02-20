import React from 'react';
import { withRouter } from 'react-router';

class News extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.props.clearNews();
        this.topic = this.props.match.params.ticker;
        // this.topic === undefined ? this.topic = "STOCK MARKET" : this.topic;
        if (this.topic === undefined) {
            this.topic = "STOCK MARKET" 
        } else {
             this.topic;
             this.props.getStock(this.props.match.params.ticker);
        }
        this.props.getNews(this.topic);
    }

    componentDidUpdate(prevProps) {
        const { match: { params: { ticker } } } = this.props
        if (prevProps.match.params.ticker !== ticker){
            this.props.getNews(this.props.match.params.ticker)
        }
    }

    render() {
        // debugger
        return (
            <div className="news-div">
                <h2 className="news-heading">
                {this.props.match.params.ticker === undefined ? ""  : this.props.stock.longName} News
                {/* {this.props.match.params.ticker === undefined ? ""  : this.props.stock.info.longName} News */}
                </h2>
                {
                    Object.keys(this.props.news).map(id => {
                        return (
                            <a key={id} href={this.props.news[id].url} className="news-article" target="_blank">
                               
                                <div>
                                    <div className="news-story">
                                       <div className="news-source">
                                            {this.props.news[id].source.name ? this.props.news[id].source.name : "Unknown Source"}    
                                        </div>
                                     <div className="news-title">
                                            {this.props.news[id].title ? this.props.news[id].title : "Untitled" }
                                        </div>
                                        <div className="news-description">
                                            {this.props.news[id].description ? this.props.news[id].description.slice(0, 48) + "..." : "No Description" }
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