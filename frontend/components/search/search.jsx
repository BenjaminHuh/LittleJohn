import React from 'react';
import { Link, withRouter, Route } from 'react-router-dom';
import stocks from './stocks.json';
import StockHome from '../stock/stock_home';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            query: ""
        }            

        this.stocks = stocks;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    update() {
        
        return (e) => {
            this.setState({ query: e.target.value });
            let resultMatch;
            if (Object.keys(stocks).some(key => {
                return stocks[key].ticker === e.target.value.toUpperCase();
                })) {
                resultMatch = Object.values(stocks).filter(obj => 
                    obj.ticker === e.target.value.toUpperCase());
            }

            let result = Object.values(stocks).filter(obj => 
                obj.ticker.toLowerCase()
                .includes(e.target.value.toLowerCase()) || 
                obj.name.toLowerCase()
                .includes(e.target.value.toLowerCase()));    

            let emptySearch = document.getElementById("search-empty");
            if (emptySearch) emptySearch.outerHTML = `<div id="search-results"></div>`;
            let searchResults = document.getElementById("search-results");
            searchResults.innerHTML = `<div class="search-item" style="color:darkgray;">Stock</div>`;
            if (e.target.value === undefined) searchResults.outerHTML = `<div class="search-empty"></div>`;

            if (result.length === 0) {
                searchResults.innerHTML = `<div class="search-item" style="color:darkgray;">No Ticker or Company found</div>`
            } else {
                if (result && resultMatch && result.includes(resultMatch[0])) {
                    result.splice(result.indexOf(resultMatch[0], 1));
                    result.unshift(resultMatch[0]);
                }
                
                result.splice(0, 6).forEach(stock => {
                    searchResults.innerHTML += `<a class="search-link" href="#/stocks/${stock.ticker}">
                                                    <div class="search-item">
                                                        <div class="search-ticker">${stock.ticker}</div> 
                                                        <div class="search-space"></div>
                                                        <div class="search-name">${stock.name}</div>
                                                    </div>
                                                </a>`;
                });
            }
            
            if (e.target.value === "") {
                searchResults.outerHTML = `<div id="search-empty"></div>`;
                searchResults.innerHTML = "";
            }    

            let items = document.getElementsByClassName("search-item")
            for (let i = 0; i < items.length; i++) {
                items[i].addEventListener("click", () => {
                    searchResults.outerHTML = `<div id="search-empty"></div>`;
                    searchResults.innerHTML = "";
                })
            }      
        }
    }



    handleSubmit(e) {
        e.preventDefault();
 

        let searchResults = document.getElementById("search-results");
        let result = searchResults.children[1].children[0].children[0].innerHTML;
        document.getElementById("searchbar").value = "";
        searchResults.outerHTML = `<div id="search-empty"></div>`;
        this.props.getStock(result).then(() => {
            this.props.history.push(`/stocks/${result}`)
        });
    }

    render() {
        return (
            <div>
                <div> 
                    <form className="search-form"> 
                        <input 
                            id="searchbar"
                            className="searchbar" 
                            type="text" 
                            placeholder="Search by Ticker or Company Name.. "
                            ref={input => this.search = input} 
                            onChange={this.update()}
                            required
                        />
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