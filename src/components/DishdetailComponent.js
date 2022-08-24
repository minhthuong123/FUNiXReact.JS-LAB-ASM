import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Button, Col, Form, FormGroup, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

function RenderComments({ comments, departmentId }) {
  let phongban = departmentId.filter(
    (value) => value.id.indexOf(comments.departmentId) > -1
  );
  return (
    <div className="col-12 col-md-5 m-1">
      <Card style={{ backgroundColor: "#ffffff", height: "100%" }}>
        <CardBody>
          <CardTitle>Họ và tên: {comments.name}</CardTitle>
          <CardText>
            Ngày sinh: {dateFormat(comments.doB, "dd/mm/yyyy")}
          </CardText>
          <CardText>
            Ngày vào công ty: {dateFormat(comments.startDate, "dd/mm/yyyy")}
          </CardText>
          <CardText>Phòng ban: {phongban[0].name}</CardText>
          <CardText>Số ngày nghỉ còn lại: {comments.annualLeave}</CardText>
          <CardText>Số ngày đã làm thêm: {comments.overTime}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg width="100%" top src={dish.image} alt={dish.name} />
      </Card>
    </div>
  );
}

class DishDetail extends Component {
  handleOnclick = (value) => {
    this.props.deletedStaffs(value);
    // window.location.reload();
    window.location.href = "../Nhanvien";
    console.log(value)
  };

  render() {
    return (
      <div
        className="container header"
        style={{ marginBottom: "20px", paddingBottom: "2.5rem" }}
      >
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/Nhanvien">Nhân Viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
          </Breadcrumb>

          <Nav style={{ height: "48px" }}>
            <Button
              outline
              onClick={() => this.handleOnclick(this.props.dish.id)}
            >
              <span className="fa fa-trash-o"></span>
            </Button>
          </Nav>

          <div className="col-12">
            <h3>{this.props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="container header">
          <div className="row">
            <RenderDish dish={this.props.dish} />
            <RenderComments
              comments={this.props.dish}
              departmentId={this.props.departmentId}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default DishDetail;
