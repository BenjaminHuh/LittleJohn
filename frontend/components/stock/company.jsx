import React from 'react';
import company from './company.json';

const Company = () => {
    return (
        <div className="company-div">
            <h2 className="company-heading">
                About
            </h2>
            <br/>
            <div className="company-about">
                <div className="company-description">
                    {company.description}
                </div>
                <div className="company-information">
                    <div>
                        <div>CEO <p>{company.CEO}</p></div>
                        <div>Market Cap </div>
                    </div>
                    <div>
                        <div>Employees <p>{company.employees}</p></div>
                        <div>Price-Earnings Ratio</div>
                    </div>
                    <div>
                        <div>Headquarters <p>{company.city} ,{company.state}</p></div>
                        <div>Dividend Yield</div>
                    </div>
                    <div>
                        <div>Founded</div>
                        <div>Average Volume</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company;