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


class Chart extends React.Component {
    
    render() {
        // const stocks = [{aapl: aapl}, {amzn: amzn}, {ba: ba}, {baba: baba}, {coke: coke}, {dis: dis}, {fb: fb}, {msft: msft}, {nflx: nflx}, {nvda: nvda}, {sq: sq}, {tsla: tsla}, {wf: wf}]
        let randNum = Math.round(Math.random() * 10)
        let stock = Object.keys(stocks[randNum])[0]
        // debugger
        return (
            <div className="chart-render">
                <div className="chart-title">
                    {stock.toUpperCase()}
                </div>
                <LineChart
                width={800}
                height={350}
                data={stocks[randNum][stock]}
                margin={{ top: 1, right: 25, left: 15, bottom: 23 }}
                >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="Date" tick={false} stroke="#fff"/>
                <YAxis type="number" domain={['auto', 'auto']} />
                {/* <YAxis dateKey="Price" tick={false} stroke="#fff"/> */}
                <Tooltip />
                <Line type="monotone" dataKey="Price" stroke="#82ca9d" strokeWidth={3} dot={false}/>
                </LineChart>
            </div>

        )
    }
}

export default Chart;