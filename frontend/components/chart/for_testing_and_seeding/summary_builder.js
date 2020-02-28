const data = require('./ninety_three_days.json');
const fs = require('fs');

const balance = 1923874

let output = "";
let stocks = {
  "AAPL": 800,
  "AMZN": 750,
  "DIS": 200,
  "JPM": 700,   
  "MSFT": 300,
  "TSLA": 500,
  "WFC": 700
}
Object.keys(data).forEach(key => {
    let close = 0;
    Object.keys(data[key]).forEach(ticker => {
        if (ticker !== "Date") {
            close += (parseFloat(data[key][ticker]) * stocks[ticker]);
        }
    })
    output += `Summary.create(user_id: user1.id, balance: ${balance}, date: "${data[key]["Date"]}", stocks: {}, close: ${close}, total: ${balance + close})\n`
})


fs.writeFileSync("./seed.txt", output)

