import React from "react";
import { Breadcrumb, BreadcrumbItem, Card, CardImg } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import dateFormat from "dateformat"; 
import "../App"

const ThongTinNV = ({ staffs }) => {
  const { ThongTinNVID } = useParams();
  let thongtin = staffs
    .filter((STAFFS) => STAFFS.id == ThongTinNVID)
    .map((value, index) => {
      return (
        <div>
          <div className="container containerTT">
            <div className="row">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/">Nhân Viên</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>{value.name}</BreadcrumbItem>
              </Breadcrumb>
            </div>
            <div className="row">
              <div className=" col-md-3 col-sm-4 col-xs-12" style={{height:'311px'}}>
                <Card>
                  <CardImg
                    width="100%"
                    height="311px"
                    top
                    src={value.image}
                    alt={value.name}
                  />
                </Card>
              </div>
              <div className="row col-md-9 col-sm-8 col-xs-12">
                <Card>
                  <Card.Body>
                    <Card.Title>Họ và tên: {value.name}</Card.Title>
                    <Card.Text>
                      Ngày sinh: {dateFormat(value.doB, "dd/mm/yyyy")}
                    </Card.Text>
                    <Card.Text>
                      Ngày vào công ty:{" "}
                      {dateFormat(value.startDate, "dd/mm/yyyy")}
                    </Card.Text>
                    <Card.Text>Phòng ban: {value.department.name}</Card.Text>
                    <Card.Text>
                      Số ngày nghỉ còn lại: {value.annualLeave}
                    </Card.Text>
                    <Card.Text>Số ngày đã làm thêm: {value.overTime}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      );
    });

  return <div>{thongtin}</div>;
};

export default ThongTinNV;
