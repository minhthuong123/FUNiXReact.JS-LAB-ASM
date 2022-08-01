import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavbarBrand,
} from "react-bootstrap";
import { Route, Routes, Link } from "react-router-dom";
import NhanVien from "./NhanVien";
import PhongBan from "./PhongBan";
import BangLuong from "./BangLuong";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import ThongTinNV from "./ThongTinNV";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      DEPARTMENTS: DEPARTMENTS,
      search: "",
      searchNV: "",
    };
  }

  handleSearch = () => {
    this.setState({
      searchNV: this.state.staffs.filter(
        (search) => search.name.toLowerCase() === this.state.search.toLowerCase()
      ),
    });
  };
  handleNull = () => {
    this.setState({
      search: "",
      searchNV: "",
    });
    
  };
  handleChange = (Event) => {
    this.setState({
      search: Event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Navbar variant="dark" className="heading">
          <NavbarBrand href="/">
            <img
              src="assets/images/logo.png"
              height="30"
              width="41"
              alt="Ristorante Con Fusion"
            />
          </NavbarBrand>
          <Navbar.Brand onClick={() => this.handleNull()}>
            <Link to="/">
              <i
                class="fa fa-users"
                aria-hidden="true"
                style={{ color: "#ffffff" }}
              >
                {" "}
                Nhân Viên
              </i>
            </Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/PhongBan">
                <i
                  className="fa fa-id-card-o"
                  aria-hidden="true"
                  style={{ color: "#ffffff" }}
                >
                  {" "}
                  Phòng Ban
                </i>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/BangLuong">
                <i
                  class="fa fa-credit-card"
                  aria-hidden="true"
                  style={{ color: "#ffffff" }}
                >
                  {" "}
                  Bảng Lương
                </i>
              </Link>
            </Nav.Link>
          </Nav>
          <Form
            style={{
              display: "inline-flex",
            }}
          >
            <FormControl
              type="text"
              value={this.state.search}
              onChange={(Event) => this.handleChange(Event)}
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button variant="outline-light" onClick={() => this.handleSearch()}>
              Search
            </Button>
          </Form>
        </Navbar>

        <Routes>
          <Route
            path="/"
            element={
              <NhanVien
                staffs={this.state.staffs}
                search={this.state.searchNV}
              />
            }
          />
          <Route
            path="/ThongTinNV/:ThongTinNVID"
            element={<ThongTinNV staffs={this.state.staffs} />}
          />
          <Route
            path="/PhongBan"
            element={<PhongBan departments={this.state.DEPARTMENTS} />}
          />
          <Route
            path="/BangLuong"
            element={<BangLuong bangluong={this.state.staffs} />}
          />
        </Routes>
      </div>
    );
  }
}

export default NavBar;
