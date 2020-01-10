import React from 'react';
import NavbarContainer from "../navbar/navbar_container";
import Phone from "./phone/phone";

class Main extends React.Component {

    render() {
        return (
            <div>
                <nav>
                    <NavbarContainer/>
                </nav>
                <div className="main_one">
                    <div id='one'>                       
                        <h3 className="time">It's Time to Do Money</h3>  
                        <br/>

                        <br/>                 
                        <p className="pioneer">
                            LittleJohn, a pioneer of commission-free investing, gives you more ways to make your money work harder.
                        </p>
                        <div>
                            {/* <Phone className="phone-cont" /> */}
                        </div>
                    </div>
                </div>
                <div className="main_two">
                    <div id='two'>
                        <h3>Break Free from Commission Fees</h3>
                        <br/>
                        <p>
                            Make unlimited commission-free trades in stocks, funds, and options with LittleJohn Financial. The same goes for buying and selling cryptocurrencies with LittleJohn Crypto. Zero commission fees.
                        </p>
                    </div>
                </div>
                <div className="main_three">
                    <div id="three">
                        <h3>Learn As You Grow</h3>
                        <br/>
                        <p>
                            Our goal is to make investing in financial markets more affordable, more intuitive, and more fun, no matter how much experience you have (or don’t have).
                        </p>
                    </div>
                </div>
                <div className="main_four">
                    <div id="four">
                        <h2>Our Products</h2>
                        <h4>Stocks & Funds Options Gold Cash Management | Crypto</h4>
                        <br/>
                        <p>
                            Get mobile access to the markets. Invest commission-free in individual companies or bundles of investments (ETFs).
                        </p>

                    </div>
                </div>
                <div className="main_five">
                </div>
            </div>
        );
    }
}

export default Main;
