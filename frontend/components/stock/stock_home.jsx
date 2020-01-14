import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import StockContainer from '../stock/stock_container';


const StockHome = ({ match, history }) => {
    return (
    <div>
        <NavbarContainer match={ match} history={ history }/>
        <br/>
        <StockContainer match={ match } history={ history }/>
    </div>
)}

export default StockHome; 