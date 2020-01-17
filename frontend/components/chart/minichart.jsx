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


class Minichart extends React.Component {
    
    render() {
        const stocks = {aapl: aapl, amzn: amzn, ba: ba, baba: baba, coke: coke, dis: dis, fb: fb, msft: msft, nflx: nflx, nvda: nvda, sq: sq, tsla: tsla, wf: wf}
        const { ticker, change } = this.props
        let stroke = change > 0 ? "#72ca9d" : "#FB6E6E"
        return (
            <div className="chart-render">
     
               <LineChart
                    width={90}
                    height={60}
                    data={stocks[ticker.toLowerCase()]}
                    margin={{ top: 10, right: 5, left: 2, bottom: 3 }}
                    >
                    <Line type="monotone" dataKey="Price" stroke={stroke} strokeWidth={2} dot={false}/>
                </LineChart>
            </div>
        )
    }
}

export default Minichart;