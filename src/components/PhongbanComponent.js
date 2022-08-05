import React from "react";
import { Card, CardText, CardBody } from "reactstrap";


function Home(props) {
  return (
    <div className="container" >
      <div className="row" >
        {props.dish.map((item) => {
          return (
            <Card
              style={{ margin: "10px" }}
              className="col-md-3 col-sm-4 col-xs-12"
            >
              <CardBody>
                <h4>{item.name}</h4>
                <CardText>Số lượng nhân viên: {item.numberOfStaff}</CardText>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
