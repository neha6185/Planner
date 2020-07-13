import React from "react";
import { Button, Table } from "reactstrap";

function TransactionDetail({ items, deleteItem }) {
  //  const products = this.props.products;
  console.log("ExpenseList :" + { items });
  if (items != null) {
    const list = items.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.date}</td>
          <td>{item.merchant}</td>
          <td>{item.item}</td>
          <td>{item.amount}</td>

          <td>
            <Button
              color="danger"
              onClick={() => {
                deleteItem(item.id);
              }}
            >
              <i className="fa fa-trash fa-lg" />
            </Button>
          </td>
        </tr>
      );
    });

    return (
      <div className="col mt-5">
        <Table striped responsive bordered className="mt-3">
          <thead>
            <tr className="thead">
              <th scope="row">#</th>
              <th>Date</th>
              <th>Merchant</th>
              <th>Item</th>
              <th>Amount</th>
              <th className="text-danger">Remove</th>
            </tr>
          </thead>
          <tbody className="tbody">{list}</tbody>
        </Table>
      </div>
    );
  } else {
    return <div />;
  }
}
export default TransactionDetail;
