import React from "react";
import { Card, CardTitle, CardBody } from "reactstrap";

function TotalExpense({ items }) {
  var totalIncome = 0;
  var totalExpenses = 0;

  if (items != null) {
    const amounts = items.map((item) => item.amount);
    console.log(`Amount: ${amounts}`);
    // console.log(`Transaction Type ${}`);
    const debits = items.filter((item) => item.transactiontype === "Debit");
    console.log(`Debits: ${debits}`);
    const expenses = debits.map((item) => item.amount);

    console.log(`Expenses: ${expenses}`);

    const credits = items.filter((item) => item.transactiontype === "Credit");
    const income = credits.map((item) => item.amount);
    console.log(`Income: ${income}`);
    if (income.length > 0) {
      totalIncome = income.reduce(
        (acc, item) => parseInt(acc) + parseInt(item)
      );
      console.log(" Income: " + totalIncome);
    }
    if (expenses.length > 0) {
      totalExpenses = expenses.reduce(
        (acc, item) => parseInt(acc) + parseInt(item)
      );
      console.log("Expenses:" + totalExpenses);
    }

    return (
      <Card outline color="primary" className="budget-card">
        <CardTitle>
          <h4>
            B<small>ALANCE</small> S<small>UMMARY</small> :{" "}
            {totalIncome - totalExpenses} $
          </h4>
        </CardTitle>
        <CardBody>
          <div className="row">
            <div className="col">
              <h5>Income : {totalIncome} $</h5>
            </div>
            <div className="col">
              <h5>Expense : -{totalExpenses} $</h5>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  } else {
    return <div />;
  }
}

export default TotalExpense;
