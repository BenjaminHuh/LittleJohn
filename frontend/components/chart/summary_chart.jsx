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
        this.priceUpdate = this.priceUpdate.bind(this);
    }

    priceUpdate({ payload, label, active }) {
        const { summary } = this.props;
        let data = Object.values(summary);
        if (data[0]) {
            let firstTotal = data[0].total;
            let currTotal = data[data.length - 1].total.toFixed(2);
            if (active && payload[0]) {
                document.getElementById("curr-total").innerHTML = `$${payload[0].value.toFixed(2)}`;
                let dSign;
                if ( firstTotal > payload[0].value) {
                    dSign = "-$"; 
                } else {
                    dSign = "+$";
                }
                // debugger;
                document.getElementById("curr-change").innerHTML = `${dSign}${Math.abs(firstTotal - payload[0].value).toFixed(2)} (${dSign}${Math.abs((firstTotal - payload[0].value)/firstTotal * 100).toFixed(2)}%) on ${payload[0].payload.date}`
            }
            else if (!active && document.getElementById("curr-total")){
                document.getElementById("curr-total").innerHTML = `$${currTotal}`;
                let dSign;
                if ( firstTotal > currTotal) {
                    dSign = "-$"; 
                } else {
                    dSign = "+$";
                }
                document.getElementById("curr-change").innerHTML = `${dSign}${Math.abs(firstTotal - currTotal).toFixed(2)} (${dSign}${Math.abs((firstTotal - currTotal)/firstTotal * 100).toFixed(2)}%)`;
            }
        }
    }

    render() {
        let data = Object.values(this.props.summary);
        if (data.length === 0) {
            return (
                <div className="chart-render-outer">
                    <div className="chart-render">
                        <div className="portfolio-summary-header">
                            <div className="portfolio-title">Portfolio Summary</div>
                            <div id="curr-change">
                                "No snapshot. available. Please deposit funds."
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            let currTotal = data[data.length - 1].total.toFixed(2);
            let firstTotal = data[0].total;

            let dSign;
            if ( firstTotal > currTotal) {
                dSign = "-$"; 
            } else {
                dSign = "+$";
            }            
            let currChange = `${dSign}${Math.abs(firstTotal - currTotal).toFixed(2)} (${dSign}${Math.abs((firstTotal - currTotal)/firstTotal * 100).toFixed(2)}%) Today`
            return (
                <div className="chart-render-outer">
                    <div className="portfolio-summary-render">
                        <div className="portfolio-summary-header">
                            <div className="portfolio-title">Portfolio Summary</div>
                            <div id="curr-total">${data[data.length - 1].total.toFixed(2)}</div>
                            <div id="curr-change">{currChange}</div>
                        </div>
                        {
                            // data.length > 0 &&
                        <LineChart
                            width={800}
                            height={450}
                            // data={stocks[ticker.toLowerCase()]}
                            data={data}
                            // margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                            margin={{ top: 0, right: 70, left: -10, bottom: 0 }}
                            >
                            <XAxis dataKey="date" tick={false} stroke="#fff" domain={['auto', 'auto']}/>
                            <YAxis interval={300} type="number" tick={false} stroke="#fff" domain={['auto', 'auto']} />
                            <Tooltip position={{ x: "auto", y: 0 }} content={this.priceUpdate} />
                            <Line type="monotone" 
                                name="Price"
                                dataKey="total" 
                                stroke="#72ca9d"
                                strokeWidth={2} 
                                dot={false} 
                                connectNulls={true}
                                // onMouseEnter={this.mouseEnter}
                                // onMouseLeave={() => this.mouseExit}
                                // onMouseMove={this.mouseMove}
                                // animationEasing={"ease-in-out"}
                            />
            

                            <ReferenceLine y={data[0].total}
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
}

export default SummaryChart