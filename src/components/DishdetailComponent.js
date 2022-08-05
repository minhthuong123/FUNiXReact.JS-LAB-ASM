import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

function RenderComments({ comments }) {
  console.log(typeof comments[0].department);
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Họ và tên: {comments[0].name}</CardTitle>
          <CardText>
            Ngày sinh: {dateFormat(comments[0].doB, "dd/mm/yyyy")}
          </CardText>
          <CardText>
            Ngày vào công ty: {dateFormat(comments[0].startDate, "dd/mm/yyyy")}
          </CardText>
          <CardText>
            Phòng ban:{" "}
            {comments[0].department.name}
          </CardText>
          <CardText>Số ngày nghỉ còn lại: {comments[0].annualLeave}</CardText>
          <CardText>Số ngày đã làm thêm: {comments[0].overTime}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
const DishDetail = (props) => {
  if (props.dish != null) {
    return (

      <div className="container header" style={{marginBottom:'20px',paddingBottom: '2.5rem' }}>
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/Nhanvien">Nhân Viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish[0].name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish[0].name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-3 col-sm-4 col-xs-12 "
            style={{ width: "275px"}}
          >
            <Card>
              <CardImg
                width="100%"
                top
                src={props.dish[0].image}
                alt={props.dish[0].name}
              />
            </Card>
            {/* </div> */}
          </div>
          <div
            className="col-md-3 col-sm-4 col-xs-12"
            style={{ width: "275px" }}
          >
            <RenderComments comments={props.dish} />
          </div>
        </div>
      </div>
    )
  } else return (<div></div>)
}

export default DishDetail;
