import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  FormFeedback,
  Row,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Button, Col, Form, FormGroup, Nav, NavItem } from "react-bootstrap";
import { Input, Modal, ModalBody, ModalHeader } from "reactstrap";
import { Control, LocalForm, Errors, actions } from "react-redux-form";
import { Loading } from "./LoadingComponent";

// import { Loading } from "./LoadingComponent";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => val >= 1;
const isNumberS = (val) => val >= 0;
const option = (val) => val && val.length;
class Menu extends Component {
  constructor() {
    super();
    this.state = {
      searchNV: "",
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  handleSubmit(values, event) {
    this.props.addFeedbackForm(
      values.name,
      values.doB,
      values.salaryScale,
      values.startDate,
      values.departmentS,
      values.annualLeave,
      values.overTime
    );
    //  window.location.reload();
     console.log(values)
    //  event.preventDefault();
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleSearch = () => {
    this.setState({
      searchNV: this.props.dishes.staffs.filter(
        (search) =>
          search.name.toLowerCase().indexOf(this.search.value.toLowerCase()) >
          -1
      ),
    });
  };

  render() {
    let searchnv =
      this.state.searchNV == ""
        ? this.props.dishes.staffs
        : this.state.searchNV;
    const menu = searchnv.map((dish) => {
      if (this.props.dishes.isLoading) {
        return (
          <div className="container">
            <div className="row">
              <Loading />
            </div>
          </div>
        );
      } else if (this.props.dishes.isLoading) {
        return (
          <div className="container">
            <div className="row">
              <h4>{this.props.dishes.errMess}</h4>
            </div>
          </div>
        );
      } else if (this.props.dishes.staffs) {
        return (
          <div
            className="col-md-2 col-sm-4 col-xs-12"
            key={dish.id}
            style={{ marginBottom: "10px" }}
          >
            <Card>
              <Link to={`/Nhanvien/${dish.id}`}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />

                <CardBody
                  style={{
                    textAlign: "center",
                  }}
                >
                  <CardTitle>{dish.name}</CardTitle>
                </CardBody>
              </Link>
            </Card>
          </div>
        );
      }
    });

    return (
      <div className="container">
        <div className="row">
          <div
            className="col-md-12 col-sm-12 "
            style={{
              display: "inline-flex",
            }}
          >
            <div className="col-md-3 col-sm-3 ">
              <h4>Nhân Viên</h4>
            </div>
            <div className="col-md-3 col-sm-3 ">
              <Nav navbar>
                <NavItem>
                  <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-plus-square"></span>
                  </Button>
                </NavItem>
              </Nav>
            </div>
            <div className="col-md-6 col-sm-6 ">
              <FormGroup
                style={{
                  float: "right",
                  display: "inline-flex",
                  width: "300px",
                }}
              >
                <Input
                  type="text"
                  placeholder="Search"
                  innerRef={(input) => (this.search = input)}
                />
                <Button
                  outline
                  onClick={() => this.handleSearch()}
                  style={{
                    marginLeft: "30px",
                  }}
                >
                  Tìm
                </Button>
              </FormGroup>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12">
            <React.Fragment>
              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>
                  Thêm Nhân Viên
                </ModalHeader>
                <ModalBody>
                  <LocalForm
                    model="feedback"
                    onSubmit={(values) => this.handleSubmit(values)}
                  >
                    <Row className="form-group">
                      <Label htmlFor="name" md={3}>
                        Tên
                      </Label>
                      <Col md={9}>
                        <Control.text
                          model=".name"
                          id="formthem"
                          name="name"
                          placeholder="Tên"
                          className="form-control"
                          validators={{
                            required,
                            minLength: minLength(3),
                            maxLength: maxLength(15),
                          }}
                        />
                        <Errors
                          className="text-danger"
                          model=".name"
                          show="touched"
                          messages={{
                            required: `Yêu cầu nhập `,
                            minLength: "Yêu cầu nhập nhiều hơn 2 ký tự",
                            maxLength: "Yêu cầu nhập ít hơn 30 ký tự",
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Label htmlFor="doB" md={3}>
                        Ngày sinh
                      </Label>
                      <Col md={9}>
                        <Control.text
                          type="date"
                          model=".doB"
                          id="formthem"
                          name="doB"
                          placeholder="Ngày sinh"
                          className="form-control"
                          validators={{
                            required,
                            minLength: minLength(0),
                          }}
                        />
                        <Errors
                          className="text-danger"
                          model=".doB"
                          show="touched"
                          messages={{
                            required: `Yêu cầu nhập `,
                            minLength: "Yêu cầu nhập ngày tháng năm sinh",
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Label htmlFor="startDate" md={3}>
                        Ngày vào công ty
                      </Label>
                      <Col md={9}>
                        <Control.text
                          type="date"
                          model=".startDate"
                          id="formthem"
                          name="startDate"
                          placeholder="Ngày sinh"
                          className="form-control"
                          validators={{
                            required,
                            minLength: minLength(0),
                          }}
                        />
                        <Errors
                          className="text-danger"
                          model=".startDate"
                          show="touched"
                          messages={{
                            required: `Yêu cầu nhập `,
                            minLength: "Yêu cầu nhập ngày vào công ty",
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Label htmlFor="department" md={3}>
                        Phòng ban
                      </Label>
                      <Col md={9}>
                        <Control.select
                          type="select"
                          id="formthem"
                          model=".departmentS"
                          name="department"
                          className="form-control"
                          validators={{
                            option,
                          }}
                        >
                          <option hidden>--selection</option>
                          <option value="Dept01">Sale</option>
                          <option value="Dept02">HR</option>
                          <option value="Dept03">Marketing</option>
                          <option value="Dept04">IT</option>
                          <option value="Dept05">Finance</option>
                        </Control.select>
                        <Errors
                          className="text-danger"
                          model=".departmentS"
                          show="touched"
                          messages={{
                            option: "Yêu cầu lựa chọn",
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Label htmlFor="salaryScale" md={3}>
                        Hệ số lương
                      </Label>
                      <Col md={9}>
                        <Control.text
                          type="number"
                          model=".salaryScale"
                          id="formthem"
                          name="salaryScale"
                          placeholder="Hệ số lương"
                          className="form-control"
                          validators={{
                            required,
                            isNumber,
                          }}
                        />
                        <Errors
                          className="text-danger"
                          model=".salaryScale"
                          show="touched"
                          messages={{
                            required: `Yêu cầu  `,
                            isNumber: "chọn hệ số lương từ 1 trở lên",
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Label htmlFor="annualLeave" md={3}>
                        Số ngày nghỉ còn lại
                      </Label>
                      <Col md={9}>
                        <Control.text
                          type="number"
                          model=".annualLeave"
                          id="formthem"
                          name="annualLeave"
                          placeholder="Số ngày nghỉ còn lại"
                          className="form-control"
                          validators={{
                            required,
                            isNumberS,
                          }}
                        />
                        <Errors
                          className="text-danger"
                          model=".annualLeave"
                          show="touched"
                          messages={{
                            required: `Yêu cầu nhập `,
                            isNumberS: "Số ngày nghỉ còn lại từ 0 trở lên",
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Label htmlFor="overTime" md={3}>
                        Số ngày đã làm thêm
                      </Label>
                      <Col md={9}>
                        <Control.text
                          type="number"
                          model=".overTime"
                          id="formthem"
                          name="overTime"
                          placeholder="Số ngày đã làm thêm"
                          className="form-control"
                          validators={{
                            required,
                            isNumberS,
                          }}
                        />
                        <Errors
                          className="text-danger"
                          model=".overTime"
                          show="touched"
                          messages={{
                            required: `Yêu cầu nhập `,
                            isNumberS: "Số ngày đã làm thêm từ 0 trở lên",
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Col md={{ size: 10, offset: 2 }}>
                        <Button type="submit" color="primary">
                          Thêm
                        </Button>
                      </Col>
                    </Row>
                  </LocalForm>
                </ModalBody>
              </Modal>
            </React.Fragment>
          </div>
        </div>
        <hr />
        <div className="row">{menu}</div>
      </div>
    );
  }
}

export default Menu;
