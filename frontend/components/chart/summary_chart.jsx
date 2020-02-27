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

class SummaryChart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="chart-render-outer">
                <div className="chart-render">
                this is chart-render
                    {/* {
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
                    } */}
                </div>
            </div>
        )
    }
}

export default SummaryChart