import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import stocks from './stocks.json';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            query: ""
        }            

        this.stocks = stocks;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        this.props.getStocks();
    }
    
    update() {
        return (e) => {
            this.setState({ query: e.target.value })
            let result = Object.values(stocks).filter(obj => 
                obj.ticker.toLowerCase()
                .includes(e.target.value.toLowerCase()) || 
                    obj.name.toLowerCase()
                    .includes(e.target.value.toLowerCase()));
            // result.splice(0, 9).forEach(stock => {
            //     console.log(stock.ticker + " " + stock.name)
            // })
            let emptySearch = document.getElementById("search-empty");
            if (emptySearch) emptySearch.outerHTML = `<div id="search-results"></div>`;
            let searchResults = document.getElementById("search-results");
            searchResults.innerHTML = `<div class="search-item" style="color:darkgray;">Stock</div>`;
            if (e.target.value === undefined) searchResults.outerHTML = `<div class="search-empty"></div>`;
            result.splice(0,6).forEach(stock => {
                searchResults.innerHTML += `<div class="search-item"><div class="search-ticker">${stock.ticker}</div> 
                                            <div class="search-space"></div>
                                            <div class="search-name">${stock.name}</div></div>`; 
                // console.log(stock.ticker + ' ' + stock.name);
            });
            if (searchResults.children[1]) searchResults.children[1].id = "first-result";
            if (e.target.value === "") {
                searchResults.outerHTML = `<div id="search-empty"></div>`;
                searchResults.innerHTML = "";
            }
            
        }
    }


    handleSubmit(e) {
        e.preventDefault();
        // if (this.state.query === "") {

        // } else {
        //     try {
        //         this.props.getStock(this.state.query).then(() => {
        //             this.props.history.push(`/stocks/${this.state.query}`)
        //         })
        //     }
        //     catch(error) {
        //         alert(error);
        //     }
        // }

        let searchResults = document.getElementById("search-results");
        let firstResult = searchResults.children[1].firstChild.innerHTML;
        document.getElementById("searchbar").value = "";
        searchResults.outerHTML = `<div id="search-empty"></div>`;

        this.props.getStock(firstResult).then(() => {
            this.props.history.push(`/stocks/${firstResult}`)
        });
    }

    render() {
        // debugger;
        return (
            <div>
                <div> 
                    <form className="search-form"> 
                        <input 
                            id="searchbar"
                            className="searchbar" 
                            type="text" 
                            placeholder="Search"
                            ref={input => this.search = input} 
                            onChange={this.update()}
                            required
                        />

                        {/* <button type="submit" onClick={() => this.props.history.push(`/stocks/${this.state.query}`)}></button> */}
                        <button type="submit" onClick={this.handleSubmit}></button>
                    </form>
                </div>
                <div id="search-empty">
                </div>
            </div>
        );
    }

}

export default withRouter(Search);