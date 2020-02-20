import React from 'react';
import { Link, withRouter } from 'react-router-dom'


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            query: ""
        }            
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        this.props.getStocks();
    }
    
    update() {
        return (e) => {
            this.setState({ query: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.query === "") {

        } else {
            try {
                this.props.getStock(this.state.query).then(() => {
                    this.props.history.push(`/stocks/${this.state.query}`)
                })
            }
            catch(error) {
                alert(error);
            }
        }
    }

    render() {

        return (
            <div>
                <div> 
                    <form className="search-form"> 
                        <input 
                            className="searchbar" 
                            type="text" 
                            placeholder="Search by ticker.. try aapl or TSLA"
                            ref={input => this.search = input} 
                            onChange={this.update()}
                            required
                        />

                        {/* <button type="submit" onClick={() => this.props.history.push(`/stocks/${this.state.query}`)}></button> */}
                        <button type="submit" onClick={this.handleSubmit}></button>
                    </form>
                </div>
                <div id="searchbar">

                </div>
            </div>
        );
    }

}

export default withRouter(Search);