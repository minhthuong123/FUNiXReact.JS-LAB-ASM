import React, { Component } from "react";
import dateFormat from "dateformat";
import { Card, Nav, NavDropdown } from "react-bootstrap";

class StaffListComponent extends Component {
  // dữ liệu staffs null
  constructor(props) {
    super(props);
    this.state = {
      selectstaffs: null,
      selectEventKey: "col-md-4 col-sm-6 col-xs-12",
    };
  }

  // hàm gọi nhận dữ liệu
  onstaffs(staffs) {
    this.setState({
      selectstaffs: staffs,
    });
  }


  // hàm gọi hiển thị thông tin nhân viên
  staffs(staffs) {
    if (staffs != null) {
      return (
        <Card border="primary" style={{ marginTop: "20px" }}>
          <Card.Header>THÔNG TIN NHÂN VIÊN</Card.Header>
          <Card.Body>
            <Card.Title>Họ và tên: {staffs.name}</Card.Title>
            <Card.Text>
              Ngày sinh: {dateFormat(staffs.doB, "dd/mm/yyyy")}
            </Card.Text>
            <Card.Text>
              Ngày vào công ty: {dateFormat(staffs.startDate, "dd/mm/yyyy")}
            </Card.Text>
            <Card.Text>Phòng ban: {staffs.department.name}</Card.Text>
            <Card.Text>Số ngày nghỉ còn lại: {staffs.annualLeave}</Card.Text>
            <Card.Text>Số ngày đã làm thêm: {staffs.overTime}</Card.Text>
          </Card.Body>
        </Card>
      );
    } else
      return (
        <div style={{ marginTop: "20px" }}>
          <Card.Body>Bấm vào tên nhân viên để xem thông tin.</Card.Body>
        </div>
      );
  }

//  dữ liệu hiển thị column
  number(eventKey) {
    this.setState({
      selectEventKey: eventKey,
    });
  }



  render() {
    let content = this.props.staffs.map((staffs) => {
      return (
        <div className={this.state.selectEventKey} id="hover">
          <Card
            style={{ marginTop: "10px" }}
            onClick={() => this.onstaffs(staffs)}
          >
            <Card.Body>{staffs.name} </Card.Body>
          </Card>
        </div>
      );
    });



    let handleSelect = () => {
      return (
        <div>
          <Nav
            variant="pills"
            activeKey="1"
            onSelect={(eventKey) => this.number(eventKey)}
          >
            <Nav.Item>
              <Nav.Link
                href="#/home"
                style={{ backgroundColor: "#0d6efd", color: "white" }}
              >
                TRANG CHỦ
              </Nav.Link>
            </Nav.Item>
            <NavDropdown title="TRẠNG THÁI HIỂN THỊ" id="nav-dropdown">
              <NavDropdown.Item eventKey="col-md-12 col-sm-12 col-xs-12">
                1
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="col-md-6 col-sm-6 col-xs-6">
                2
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="col-md-4 col-sm-4 col-xs-4">
                3
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="col-md-3 col-sm-3 col-xs-3">
                4
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="col-md-2 col-sm-2 col-xs-2">
                6
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
      );
    };


    
    return (
      <div className="container">
        <div>{handleSelect()}</div>
        <div className="row">{content}</div>
        <div className="row">
          <div className="hover col-md-4 col-sm-6 col-xs-12">
            {this.staffs(this.state.selectstaffs)}
          </div>
        </div>
      </div>
    );
  }
}

export default StaffListComponent;
