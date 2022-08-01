import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "../App.css";

class Menu extends Component {
  render() {
    let phongban = this.props.departments.map((phongban) => {
      return (
        <div className="col-md-4 col-sm-6 col-xs-12" style={{marginBottom:'20px'}}>
          <Card>
            <Card.Body>
              <Card.Title>{phongban.name}</Card.Title>
              <Card.Text>
                Số lượng nhân viên: {phongban.numberOfStaff}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    });
    return (
      <div className="container containerPB">
        <div className="row" style={{ marginTop: "20px" }}>
          {phongban}
        </div>
      </div>
    );
  }
}

export default Menu;
