import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
class BangLuong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: this.props.bangluong.loading,
      errMess: this.props.bangluong.errMess,
      sortItem: this.props.bangluong.staffsSalary.sort((a, b) =>
        a.id > b.id ? 1 : -1
      ),
    };
  }

  handlesort(eventKey) {
    if (eventKey == "true") {
      this.setState({
        sortItem: this.props.bangluong.staffsSalary.sort((a, b) =>
          a.id > b.id ? 1 : -1
        ),
      });
    } else {
      this.setState({
        sortItem: this.props.bangluong.staffsSalary.sort((a, b) =>
          a.id < b.id ? 1 : -1
        ),
      });
    }
  }

  render() {
   
    const sort = this.state.sortItem.map((bangluong) => {
      if (this.state.isLoading) {
        return (
          <div className="container">
            <div className="row">
              <Loading />
            </div>
          </div>
        );
      } else if (this.state.errMess) {
        return (
          <div className="container">
            <div className="row">
              <h4>{this.state.errMess}</h4>
            </div>
          </div>
        );
      } else
        return (
          <div
            className="col-md-4 col-sm-6 col-xs-12"
            style={{ marginBottom: "10px" }}
          >
            <Card>
              <Card.Body key={bangluong.id}>
                <Card.Title>{bangluong.name}</Card.Title>
                <br />
                <Card.Text>Mã nhân viên: {bangluong.id}</Card.Text>
                <Card.Text>Hệ số lương: {bangluong.salaryScale}</Card.Text>
                <Card.Text>Số ngày làm thêm: {bangluong.overTime}</Card.Text>
                <Card.Header as="h5">{bangluong.salary}</Card.Header>
              </Card.Body>
            </Card>
          </div>
        );
    });

    let sortItem = () => {
      return (
        <Nav onSelect={(eventKey) => this.handlesort(eventKey)}>
          <NavDropdown
            title="Sort ID"
            id="nav-dropdown"
            style={{ lineHeight: "9px" }}
          >
            <NavDropdown.Item eventKey="true">Tăng dần</NavDropdown.Item>
            <NavDropdown.Item eventKey="fales">Giảm dần</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      );
    };

    return (
      <div>
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/Nhanvien">Nhân Viên</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
              <BreadcrumbItem>{sortItem()}</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className="row">{sort}</div>
        </div>
      </div>
    );
  }
}

export default BangLuong;
