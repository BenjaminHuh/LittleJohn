import React from 'react'
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ComposedChart,
  Area,
  Bar,
  ReferenceLine
} from "recharts";

// import aapl from './aapl.json'
// import amzn from './amzn.json'
// import ba from './ba.json'
// import baba from './baba.json'
// import coke from './coke.json'
// import dis from './dis.json'
// import fb from './fb.json'
// import msft from './msft.json'
// import nflx from './nflx.json'
// import nvda from './nvda.json'
// import sq from './sq.json'
// import tsla from './tsla.json'
// import wf from './wf.json'


class StockChart extends React.Component { 

    constructor(props) {
        super(props);
        this.priceUpdate = this.priceUpdate.bind(this);
    }

    priceUpdate({ payload, label, active }) {
        const { regularMarketPreviousClose, currPrice, currChange } = this.props;
        if (active && payload[0]) {
            document.getElementById("currPrice").innerHTML = `$${payload[0].value.toFixed(2)}`;
            let dSign;
            if ( regularMarketPreviousClose > payload[0].value) {
                dSign = "-$"; 
            } else {
                dSign = "+$";
            }
            // debugger;
            document.getElementById("currChange").innerHTML = `${dSign}${Math.abs(regularMarketPreviousClose - payload[0].value).toFixed(2)} (${dSign}${Math.abs((regularMarketPreviousClose - payload[0].value)/regularMarketPreviousClose * 100).toFixed(2)}%) at ${payload[0].payload.label}`
        }
        else if (!active && document.getElementById("currPrice")){
            document.getElementById("currPrice").innerHTML = `$${currPrice}`;
            document.getElementById("currChange").innerHTML = currChange;
        }
    }
    
    render() {
        // debugger
        // let value = document.getElementsByClassName("recharts-tooltip-item-value")[0].innerHTML;
        // value.onchange(document.getElementById("currPrice").innerHTML = value)
        // const stocks = {aapl: aapl, amzn: amzn, ba: ba, baba: baba, coke: coke, dis: dis, fb: fb, msft: msft, nflx: nflx, nvda: nvda, sq: sq, tsla: tsla, wf: wf}
        const { ticker, data, stroke, regularMarketPreviousClose } = this.props
        return (
            <div className="chart-render-outer">
                {/* <div className="chart-info">

                </div> */}
                <div className="chart-render">
                    {/* <div className="chart-title">
                        {stock.toUpperCase()}
                    </div> */}
                    {
                        data.length > 0 &&
                    <LineChart
                        width={800}
                        height={450}
                        // data={stocks[ticker.toLowerCase()]}
                        data={data}
                        // margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        margin={{ top: 0, right: 70, left: -10, bottom: 0 }}
                        >
                        <XAxis dataKey="label" tick={false} stroke="#fff" domain={['auto', 'auto']}/>
                        <YAxis interval={300} type="number" tick={false} stroke="#fff" domain={['auto', 'auto']} />
                        {/* <Legend wrapperStyle={{top: 0, left: 25}}/> */}
                        <Tooltip position={{ x: "auto", y: 0 }} content={this.priceUpdate} />
                        <Line type="monotone" 
                            name="Price"
                            dataKey="average" 
                            stroke={stroke}
                            strokeWidth={3} 
                            dot={false} 
                            connectNulls={true}
                            // onMouseEnter={this.mouseEnter}
                            // onMouseLeave={() => this.mouseExit}
                            // onMouseMove={this.mouseMove}
                            // animationEasing={"ease-in-out"}
                        />
                        <ReferenceLine y={regularMarketPreviousClose}
                            type="monotone"
                            strokeWidth={1}
                            stroke={"gray"}
                            strokeDasharray="5 5"
                            // alwaysShow={true}
                            ifOverflow="extendDomain"
                        />
                    </LineChart>
                    }
                </div>
            </div>

        )
    }
}

export default StockChart;