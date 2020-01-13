import React from 'react';
import StockContainer from '../stock/stock_container';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            query: "",
            stock: { 
                symbol: "Stock Symbol goes here",
                shortname: "Company name goes here",
                regularMarketPrice: 100
            }
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        // this.props.clearStockErrors();
        this.props.getStocks();
        // debugger
    }
    
    update() {
        return (e) => {
            this.setState({ query: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState(() => ({ stock: this.props.getStock(this.state.query) }));
    }

    render() {
        return (
            <div>
                <form className="search-form"> 
                    <input 
                        className="searchbar" 
                        type="text" 
                        placeholder="Search"
                        ref={input => this.search = input} 
                        onChange={this.update()}
                    />
                    <button type="submit" onClick={this.handleSubmit}></button>
                </form>
            </div>
        );
    }

}

export default Search;