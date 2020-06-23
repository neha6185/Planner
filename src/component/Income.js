import React from "react";
import { Input, Label } from "reactstrap";


function Income() {
    return (
       
      <div className="row" style={{
        justifyContent: "center",
        alignItems: "center"
      }}>
          <div className="col-md-1">
          <Label>Income</Label>
          </div>
        <div className="col-md-3  text-muted">
          
          <Input placeholder="+0.00" />
        </div>
      </div>
      
    );
  }

  export default Income;