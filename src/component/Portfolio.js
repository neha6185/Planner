import React from "react";
import { Table } from "reactstrap";

function Portfolio(props) {
  const isLoggin = props.isRegistered;
  const products = props.products;
  const list = products.map((product) => {
    return (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.stock}</td>
        <td>{product.quantity}</td>
        <td>{product.limitPrice}</td>
      </tr>
    );
  });
  if (products != null && isLoggin === true) {
    return (
      <div className="container">
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
                </tr>
              </thead>
              <tbody>{list}</tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>Please Login</p>
      </div>
    );
  }
}

export default Portfolio;
