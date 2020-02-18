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
  Bar
} from "recharts";

import aapl from './aapl.json'
import amzn from './amzn.json'
import ba from './ba.json'
import baba from './baba.json'
import coke from './coke.json'
import dis from './dis.json'
import fb from './fb.json'
import msft from './msft.json'
import nflx from './nflx.json'
import nvda from './nvda.json'
import sq from './sq.json'
import tsla from './tsla.json'
import wf from './wf.json'


class StockChart extends React.Component {
    
    render() {

        const stocks = {aapl: aapl, amzn: amzn, ba: ba, baba: baba, coke: coke, dis: dis, fb: fb, msft: msft, nflx: nflx, nvda: nvda, sq: sq, tsla: tsla, wf: wf}
        const { ticker, data } = this.props
        // let stroke = change > 0 ? "#72ca9d" : "#FB6E6E"
        return (
            <div className="chart-render-outer">
                <div className="chart-render">
                    {/* <div className="chart-title">
                        {stock.toUpperCase()}
                    </div> */}
                    <LineChart
                        width={800}
                        height={350}
                        data={stocks[ticker.toLowerCase()]}
                        // data={data}
                        margin={{ top: 1, right: 25, left: 15, bottom: 23 }}
                        >
                        <XAxis dataKey="Date" tick={false} stroke="#fff"/>
                        {/* <YAxis type="number" domain={['auto', 'auto']} /> */}
                        <Tooltip />
                        <Line type="monotone" dataKey="Price" stroke="#72ca9d" strokeWidth={3} dot={false}/>
                    </LineChart>
                    <ul className="options">
                        <li>D</li>
                        <li>M</li>
                        <li>Y</li>
                        <li>5Y</li>
                </ul>
                </div>
            </div>

        )
    }
}

export default StockChart;