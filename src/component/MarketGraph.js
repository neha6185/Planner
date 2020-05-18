import React from "react";
import Plot from "react-plotly.js";

class MarketGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockXValue: [],
      stockYValue: [],
    };
  }
  componentDidMount() {
    this.fetchStock();
  }
  fetchStock() {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = "Y6SUHRSJL92Y8380";
    // let API_CALL = "";
    // let API_CALL = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=${API_KEY}`;
    //let API_CALL =`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=${API_KEY}`;
    let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&outputsize=compact&apikey=${API_KEY}`;
    let stockxValueFunc = [];
    let stockyValueFunc = [];
    fetch(API_CALL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        //
        //for(var key in data["Realtime Currency Exchange Rate"])
        for (var key in data["Time Series (Daily)"]) {
          stockxValueFunc.push(key);
          stockyValueFunc.push(data["Time Series (Daily)"][key]["1. open"]);
        }
        console.log(stockxValueFunc);
        pointerToThis.setState({
          stockXValue: stockxValueFunc,
          stockYValue: stockyValueFunc,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Stock Market</h1>
        {/* <p>x value: {this.state.stockXValue}</p>
        <p>y value: {this.state.stockYValue}</p> */}
        <Plot
          data={[
            {
              x: this.state.stockXValue,
              y: this.state.stockYValue,
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "red" },
            },
          ]}
          layout={{ width: 720, height: 440, title: "A Fancy Plot" }}
        />
      </div>
    );
  }
}
export default MarketGraph;
