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
  ReferenceLine,
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


class Minichart extends React.Component {
    
    render() {
        // const stocks = {aapl: aapl, amzn: amzn, ba: ba, baba: baba, coke: coke, dis: dis, fb: fb, msft: msft, nflx: nflx, nvda: nvda, sq: sq, tsla: tsla, wf: wf}
        const { ticker, change, regularMarketPreviousClose } = this.props
        let stroke = change > 0 ? "#72ca9d" : "#FB6E6E"
        return (
            <div className="minichart-render">
     
               <LineChart
                    width={90}
                    height={60}
                    // data={stocks[ticker.toLowerCase()]}
                    data={this.props.data}
                    margin={{ top: 10, right: 5, left: -60, bottom: 3 }}
                    >
                    <YAxis type="number" tick={false} stroke="#fff" domain={['auto', 'auto']} />
                    <Line type="monotone" 
                        dataKey="average" 
                        stroke={stroke} 
                        strokeWidth={1} 
                        dot={false} 
                        connectNulls={true}
                        isAnimationActive={true}
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
            </div>
        )
    }
}

export default Minichart;