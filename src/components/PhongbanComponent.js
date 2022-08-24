import React from "react";
import { Card, CardText, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from './LoadingComponent';

function Phongban(props) {
  if (props.isLoading) {
    return <Loading />;
  } else if (props.errMess) {
    return <h4>{props.errMess}</h4>;
  } else
    return (
      <div className="container">
        <div className="row">
          {props.dish.departments.map((item) => {
            return (
              <Card
                style={{ margin: "10px" }}
                className="col-md-3 col-sm-4 col-xs-12"
                key={item.id}
              >
                <Link to={`/Phongban/${item.id}`}>
                  <CardBody>
                    <h4>{item.name}</h4>
                    <CardText>
                      Số lượng nhân viên:{" "}
                      {
                        props.dishes.filter(
                          (value) => value.departmentId.indexOf(item.id) > -1
                        ).length
                      }
                    </CardText>
                  </CardBody>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    );
}

export default Phongban;
