import React from "react";
import { Table, Button } from "reactstrap";

function UpdatePortfolio(props) {
//   const products = props.products;

  return alert("Added in Portfolio");
}
function PlacedStockList(props) {
  const products = props.products;
  // console.log(products);
  const list = products.map((product) => {
    return (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.stock}</td>
        <td>{product.quantity}</td>
        <td>{product.limitPrice}</td>
        <td>
          <Button onClick={UpdatePortfolio}>Confirm</Button>
        </td>
        <td>
          <Button onClick={() => props.deleteStock(product.id)}>Cancel</Button>
        </td>
      </tr>
    );
  });
  if (products != null) {
    return (
      <div className="row">
        <div className="col">
          {" "}
          <Table striped responsive>
            <thead>
              <tr>
                <th scope="row">#</th>
                <th>Stock Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Confirm</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>{list}</tbody>
          </Table>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
}

export default PlacedStockList;
