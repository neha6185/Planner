import React, { useState } from "react";
import Plot from "react-plotly.js";
import { ModalBody, ModalHeader, Modal, ModalFooter, Button } from "reactstrap";

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
    // cconst API_CALL = "";
    // const API_KEY = "Y6SUHRSJL92Y8380";
     let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&outputsize=compact&apikey=Y6SUHRSJL92Y8380`;
    let stockxValueFunc = [];
    let stockyValueFunc = [];
    fetch(API_CALL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
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
    //   const [modal, setModal] = useState(false);

    // const toggleModal = () => setModal(!modal);
    // const closeBtn = (
    //   <Button className="close" onClick={toggleModal}>
    //     &times;
    //   </Button>
    // );
    return (
      <div>
        {/* <Modal isOpen={modal} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal} close={closeBtn}>
            Stock Performance
          </ModalHeader>
          <ModalBody> */}
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
          layout={{ width: 440, height: 440, title: "Performance" }}
        />
        {/* </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggleModal}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
         */}

        {/* <p>x value: {this.state.stockXValue}</p>
        <p>y value: {this.state.stockYValue}</p> */}
      </div>
    );
  }
}
export default MarketGraph;
