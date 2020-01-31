import React from 'react';
import NavbarContainer from "../navbar/navbar_container";
import Phone from "./phone/phone";
import { Link } from 'react-router-dom'

class Main extends React.Component {

    render() {
        return (
            <div>
                <nav>
                    <NavbarContainer/>
                </nav>
                <div className="main-div">

                    <div className="main_one">
                        <div id='one'>  
                            <div className="one-inner">
                                <h3 className="time">It's Time to Do Money</h3>  
                                <br/>

                                <br/>                 
                                <div className="pioneer">
                                    LittleJohn, a pioneer of commission-free investing, gives you more ways to make your money work harder.
                                <div className=".main-signup-div">
                                    <Link className="main-signup" to="/signup">Sign Up</Link>
                                </div>
                                </div>
                            </div>                     
                            <div className="phone-cont" >
                                <Phone />
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
                    <div className="main_two_five">
                        <img className="twofive_bg" src={window.partybg} />
                        <div id="twofive">
                            <h3>
                                Introducing Fractional Shares
                            </h3>
                            <p>
                                Invest in thousands of stocks with as little as $1.
                            </p>
                            <br/>
                            <h4>
                                Invest Any Amount
                            </h4>
                            <p>
                                Choose how much you want to invest, and we’ll convert from dollars to parts of a whole share.
                            </p>
                            <br/>
                            <h4>
                                Build a Balanced Portfolio  
                            </h4>
                            <p>
                                Customize your portfolio with pieces of different companies and funds to help reduce risk.
                            </p>
                            <br/>
                            <h4>
                                Trade in Real Time
                            </h4>
                            <p>
                                Investing in fractional shares is real-time and, as always, commission-free.
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
                            <div className="product-img">
                                <img src={window.product} />
                            </div>
                            <h4>Stocks & Funds Options Gold Cash Management | Crypto</h4>
                            <br/>
                            <p>
                                Get mobile access to the markets. Invest commission-free in individual companies or bundles of investments (ETFs).
                            </p>

                        </div>
                    </div>
                    <div className="main_five">
                        <p>© 2020 LittleJohn. All rights reserved.</p>
                        <br/>
                        <p>LittleJohn means LittleJohn Markets and its in-application and web experiences with its family of wholly owned subsidiaries which includes LittleJohn Financial, LittleJohn Securities, LittleJohn Crypto, and LittleJohn International.</p>
                        <p>Do Not Check the background of LittleJohn Financial LLC and LittleJohn Securities, LLC on FINRA’s BrokerCheck.</p>
                        <p>Securities trading is not offered to self-directed customers by LittleJohn Financial. LittleJohn Financial is not a member of the Financial Industry Regulatory Authority (FINRA).</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
