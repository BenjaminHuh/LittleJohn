import React from 'react';
import Phone from "./phone/phone";
import { Link } from 'react-router-dom'

class Main extends React.Component {

    render() {
        document.getElementById("title").innerHTML = "LittleJohn";
        return (
            <div>
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
                            <div> <img src={window.infoicon} alt="infoicon" height="20" width="20"/>Commissions Disclosure</div>
                        </div>
                    </div>
                    <div className="main_two_five">
                        <img className="twofive_bg" src={window.partybg} />
                        <div id="twothree">
                            <div id="twofive">
                                <div>
                                    <h3>
                                        Introducing Fractional Shares
                                    </h3>
                                    <p>
                                        Invest in thousands of stocks with as little as $1.
                                    </p>
                                </div>
                                <div id="twofivefive">
                                    <div>
                                        <h4>
                                            Invest Any Amount
                                        </h4>
                                        <p>
                                            Choose how much you want to invest, and we’ll convert from dollars to parts of a whole share.
                                        </p>
                                    </div>
                                    <div>
                                        <h4>
                                            Build a Balanced Portfolio  
                                        </h4>
                                        <p>
                                            Customize your portfolio with pieces of different companies and funds to help reduce risk.
                                        </p>
                                    </div>
                                    <div>
                                        <h4>
                                            Trade in Real Time
                                        </h4>
                                        <p>
                                            Investing in fractional shares is real-time and, as always, commission-free.
                                        </p>
                                    </div>
                                </div>
                            </div>
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
                    <div className="links">
                        <a href="https://github.com/benjaminhuh/" target="_blank" className="icon github" title="GitHub">
                            <svg viewBox="71 71 370 370">
                            <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"/>
                            </svg>
                        </a>

                        <a href="https://linkedin.com/in/benjamin-huh" target="_blank" className="icon linkedin" title="LinkedIn">
                            <svg viewBox="0 0 512 512">
                            <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
