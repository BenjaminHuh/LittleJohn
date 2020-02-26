import React from 'react';
// import company from './company.json';

const Company = ({ marketVolume, dividendRate, marketCap, priceToBook, company }) => {
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
                        <div className="company-ceo">CEO <p>{company.CEO}</p></div>
                        <div>Market Cap <p>{marketCap}</p></div>
                    </div>
                    <div>
                        <div>Employees <p>{company.employees}</p></div>
                        <div>Price-to-Book Ratio <p>{priceToBook}</p></div>
                    </div>
                    <div>
                        <div>Headquarters <p>{company.city} ,{company.state}</p></div>
                        <div>Dividend Rate <p>{dividendRate}</p></div>
                    </div>
                    <div>
                        <div>Sector <p>{company.sector}</p></div>
                        <div>Market Volume <p>{marketVolume}</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company;