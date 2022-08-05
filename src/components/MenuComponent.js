import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import { Button, Col, Form, FormGroup, Nav, NavItem } from "react-bootstrap";
import { Input, Modal, ModalBody, ModalHeader } from "reactstrap";

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      searchNV: "",
      isModalOpen: false,
      id: "",
      name: "",
      doB: "",
      salaryScale: "",
      startDate: "",
      department: "Sale",
      annualLeave: "",
      overTime: "",
      image: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.toggleModal = this.toggleModal.bind(this);
  }

 
  handleSubmit(event) {
 const themNV = {
   id: Math.trunc(Math.random() * 1000) + 1,
   name: this.state.name,
   doB: this.state.doB,
   salaryScale: this.state.salaryScale == "" ? 1 : this.state.salaryScale,
   startDate: this.state.startDate,
   department: {name:this.state.department},
   annualLeave: this.state.annualLeave == "" ? 0 : this.state.annualLeave,
   overTime: this.state.overTime == "" ? 0 : this.state.overTime,
   image: "/assets/images/alberto.png",
 };
 this.props.addNewjob(themNV)
    event.preventDefault();
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleSearch = () => {
    this.setState({
      searchNV: this.props.dishes.filter(
        (search) =>
          search.name.toLowerCase().indexOf(this.search.value.toLowerCase()) >
          -1
      ),
    });
  };

  render() {
    let searchnv =
      this.state.searchNV == "" ? this.props.dishes : this.state.searchNV;
    const menu = searchnv.map((dish) => {
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
    });

    return (
      <div className="container">
        <div
          className="row"

        >
          <div
            className="col-12"
            style={{
              display: "inline-flex",
              marginTop: "10px",
              marginRight: "20px",
            }}
          >
            <div
              style={{
                marginRight: "90px",
              }}
            >
              <h4>Nhân Viên</h4>
            </div>
            <div>
              <Nav navbar>
                <NavItem>
                  <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-plus-square"></span>
                  </Button>
                </NavItem>
              </Nav>
            </div>
            <div>
              <FormGroup
                style={{
                  marginLeft: "600px",
                  display: "inline-flex",
                  float: "right",
                  width: "400px",
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
          <div>
            <React.Fragment>
              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>
                  Thêm Nhân Viên
                </ModalHeader>
                <ModalBody>
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup
                      className="row"
                      controlId="formPlaintextPassword"
                      style={{ marginBottom: "10px" }}
                    >
                      <Form.Label column sm="4">
                        Tên
                      </Form.Label>
                      <Col sm="8">
                        <Input
                          name="name"
                          type="text"
                          placeholder="name"
                          // innerRef={(input) => (this.username = input)}
                          value={this.state.username}
                          onChange={this.handleInputChange}
                        />
                      </Col>
                    </FormGroup>
                    <Form.Group
                      className="row"
                      controlId="formPlaintextPassword"
                      style={{ marginBottom: "10px" }}
                    >
                      <Form.Label column sm="4">
                        Ngày sinh
                      </Form.Label>
                      <Col sm="8">
                        <Input
                          name="doB"
                          type="date"
                          // innerRef={(input) => (this.Dateofbirth = input)}
                          value={this.state.doB}
                          onChange={this.handleInputChange}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      className="row"
                      controlId="formPlaintextPassword"
                      style={{ marginBottom: "10px" }}
                    >
                      <Form.Label column sm="4">
                        Ngày vào công ty
                      </Form.Label>
                      <Col sm="8">
                        <Input
                          name="startDate"
                          type="date"
                          // innerRef={(input) => (this.startDate = input)}
                          value={this.state.startDate}
                          onChange={this.handleInputChange}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      className="row"
                      controlId="exampleForm.ControlSelect1"
                      style={{ marginBottom: "10px" }}
                    >
                      <Form.Label column sm="4">
                        Phòng ban
                      </Form.Label>
                      <Col sm="8">
                        <Input
                          name="department"
                          type="select"
                          // innerRef={(option) => (this.Department = option)}
                          value={this.state.department}
                          onChange={this.handleInputChange}
                        >
                          <option>Sale</option>
                          <option>HR</option>
                          <option>Marketing</option>
                          <option>IT</option>
                          <option>Finance</option>
                        </Input>
                      </Col>
                    </Form.Group>
                    <Form.Group
                      className="row"
                      controlId="formPlaintextPassword"
                      style={{ marginBottom: "10px" }}
                    >
                      <Form.Label column sm="4">
                        Hệ số lương
                      </Form.Label>
                      <Col sm="8">
                        <Input
                          name="salaryScale"
                          type="text"
                          placeholder="1"
                          // innerRef={(input) => (this.salaryScale = input)}
                          value={this.state.salaryScale}
                          onChange={this.handleInputChange}
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group
                      className="row"
                      controlId="formPlaintextPassword"
                      style={{ marginBottom: "10px" }}
                    >
                      <Form.Label column sm="4">
                        Số ngày nghỉ còn lại
                      </Form.Label>
                      <Col sm="8">
                        <Input
                          name="annualLeave"
                          type="text"
                          placeholder="0"
                          // innerRef={(input) => (this.annualLeave = input)}
                          value={this.state.annualLeave}
                          onChange={this.handleInputChange}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      className="row"
                      controlId="formPlaintextPassword"
                      style={{ marginBottom: "10px" }}
                    >
                      <Form.Label column sm="4">
                        Số ngày đã làm thêm
                      </Form.Label>
                      <Col sm="8">
                        <Input
                          name="overTime"
                          type="text"
                          placeholder="0"
                          // innerRef={(input) => (this.overTime = input)}
                          value={this.state.overTime}
                          onChange={this.handleInputChange}
                        />
                      </Col>
                    </Form.Group>
                    <Button type="submit" value="submit" color="primary">
                      Thêm
                    </Button>
                  </Form>
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
