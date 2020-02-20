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
    
    render() {

        // const stocks = {aapl: aapl, amzn: amzn, ba: ba, baba: baba, coke: coke, dis: dis, fb: fb, msft: msft, nflx: nflx, nvda: nvda, sq: sq, tsla: tsla, wf: wf}
        const { ticker, data, stroke, regularMarketPreviousClose } = this.props
        return (
            <div className="chart-render-outer">
                <div className="chart-info">

                </div>
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
                        margin={{ top: 100, right: 70, left: -10, bottom: 50 }}
                        >
                        <XAxis dataKey="label" tick={false} stroke="#fff" domain={['auto', 'auto']}/>
                        <YAxis interval={300} type="number" tick={false} stroke="#fff" domain={['auto', 'auto']} />
                        {/* <Legend wrapperStyle={{top: 0, left: 25}}/> */}
                        <Tooltip position={{ x: 0, y: 0 }} />
                        <Line type="monotone" 
                            name="Price"
                            dataKey="average" 
                            stroke={stroke}
                            strokeWidth={3} 
                            dot={false} 
                            connectNulls={true}
                            animationEasing={"ease-in-out"}
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