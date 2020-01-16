import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import StockContainer from '../stock/stock_container';
import NewsContainer from '../news/news_container';
import { withRouter } from 'react-router';


const StockHome = ({ match, history }) => {
    return (
    <div>
        <NavbarContainer match={ match} history={ history }/>
        <br/>
        <StockContainer match={ match } history={ history }/>
        <br/>
    </div>
)}

export default withRouter(StockHome); 