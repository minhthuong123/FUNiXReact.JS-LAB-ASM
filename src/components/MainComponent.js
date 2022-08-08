import React, { Component, useState } from "react";
import Home from "./PhongbanComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import BangLuong from "./ContactComponent";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      DEPARTMENTS: DEPARTMENTS,
      STAFFS: STAFFS,
    };
  }

  addNewjob = (job) => {
    this.setState({
      STAFFS: [...this.state.STAFFS, job],
    });
    localStorage.setItem("job", JSON.stringify([...this.state.STAFFS, job]));
  };
  componentDidMount() {
    let tanks = localStorage.getItem("job")
      ? JSON.parse(localStorage.getItem("job"))
      : this.state.STAFFS;
    this.setState({
      STAFFS: tanks,
    });
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={this.state.STAFFS.filter(
            (dish) => dish.id == parseInt(match.params.dishId, 10)
          )}
        />
      );
    };

    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="page-container">
          <Switch>
            <Route
              path="/Phongban"
              component={() => <Home dish={this.state.DEPARTMENTS} />}
            />
            <Route
              exact
              path="/Nhanvien"
              component={() => (
                <Menu dishes={this.state.STAFFS} addNewjob={this.addNewjob} />
              )}
            />
            <Route path="/Nhanvien/:dishId" component={DishWithId} />
            <Route
              exact
              path="/Bangluong"
              component={() => <BangLuong bangluong={this.state.STAFFS} />}
            />
            <Redirect to="/Nhanvien" />
          </Switch>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Main;
