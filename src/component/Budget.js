import React, { Component, useState } from "react";
import TransactionDetail from "./TransactionDetail";
import TotalExpense from "./TotalExpense";
import { Button, Card, Collapse } from "reactstrap";
import AddTransaction from "./AddTransaction";
import jsPDF from "jspdf";
import "jspdf-autotable";

function MyNav(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "My Transaction";
    const headers = [["Date", "Merchant", "Item", "Amount"]];

    const data = props.items.map((item) => [
      item.date,
      item.merchant,
      item.item,
      item.amount,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: data,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("MonthlyTransaction.pdf");
  };

  return (
    <React.Fragment>
      <div className="row m-3">
        <div className="col">
          <Button onClick={toggle} color="primary">
            {" "}
            <i className="fa fa-plus fa-lg" /> New Transaction
          </Button>
        </div>
        <div className="col">
          <Button onClick={() => exportPDF()} color="primary">
            <i className="fa fa-download fa-lg" /> Save as Pdf
          </Button>
        </div>
      </div>

      <Collapse isOpen={isOpen}>
        <Card outline color="primary" className="align-center">
          
              <AddTransaction
                items={props.items}
                addExpense={props.addExpense}
                resetTransactionForm={props.resetTransactionForm}
                toggle={toggle}
              />
            
        </Card>
      </Collapse>
    </React.Fragment>
  );
}

class Budget extends Component {
  render() {
    return (
      <div className="container-size">
        <TotalExpense items={this.props.items} />

        <MyNav
          items={this.props.items}
          addExpense={this.props.addExpense}
          resetTransactionForm={this.props.resetTransactionForm}
        />
        <div className="row">
          <TransactionDetail
            items={this.props.items}
            deleteItem={this.props.deleteItem}
          />
        </div>
      </div>
    );
  }
}

export default Budget;
