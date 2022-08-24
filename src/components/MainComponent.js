import React, { Component } from "react";
import Phongban from "./PhongbanComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import BangLuong from "./ContactComponent";
import DanhsachPB from "./DanhsachPB";
import { Switch, Route, Redirect, withRouter, matchPath } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchStaffs,
  fetchDepartments,
  fetchStaffsSalary,
  addFeedbackForm,
  deletedstaffs,
} from "../redux/ActionCreators";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../App.css";

const mapStateToProps = (state) => {

  return {
    staffs: state.staffs,
    departments: state.departments,
    staffsSalary: state.staffsSalary,
  };
};
const mapDispatchToProps = (dispatch) => ({
  deletedstaffs:(deletedStaffs)=> dispatch(deletedstaffs(deletedStaffs)),
  addFeedbackForm: (
    name,
    doB,
    salaryScale,
    startDate,
    department,
    annualLeave,
    overTime
  ) =>
    dispatch(
      addFeedbackForm(
        name,
        doB,
        salaryScale,
        startDate,
        department,
        annualLeave,
        overTime
      )
    ),
  fetchStaffs: () => {
    dispatch(fetchStaffs());
  },
  fetchDepartments: () => dispatch(fetchDepartments()),
  fetchStaffsSalary: () => dispatch(fetchStaffsSalary()),
});
class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchStaffs();
    this.props.fetchDepartments();
    this.props.fetchStaffsSalary();
  }
  render() {
    const PhongbanPage = () => {   
      return (
        <Phongban
          dish={this.props.departments}
          dishes={this.props.staffs.staffs}
        />
      );
    };
    const DishWithId = ({ match }) => {

      return (
        <DishDetail
          dish={
            this.props.staffs.staffs.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          departmentId={this.props.departments.departments}
          deletedStaffs={this.props.deletedstaffs}
          staffs={this.props.staffs.staffs}
        />
      );
    };
    const NhanvienPage = () => {

      return (
        <Menu
          dishes={this.props.staffs}
          addFeedbackForm={this.props.addFeedbackForm}
        />
      );
    };
    const DanhsachPb = (match) => {
      return (
        <DanhsachPB
          danhsachPB={this.props.staffs.staffs.filter(
            (value) =>
              value.departmentId.indexOf(match.match.params.phongbanId) > -1
          )}

        />
      );
    };

    return (
      <div>
        <Header />
        <div className="page-container">
          <TransitionGroup>
            <CSSTransition
              key={this.props.location.key}
              classNames="page"
              timeout={300}
            >
              <Switch>
                <Route exact path="/Nhanvien" component={NhanvienPage} />
                <Route path="/Nhanvien/:dishId" component={DishWithId} />
                <Route exact path="/Phongban" component={PhongbanPage} />
                <Route path="/Phongban/:phongbanId" component={DanhsachPb} />
                <Route
                  exact
                  path="/Bangluong"
                  component={() => (
                    <BangLuong bangluong={this.props.staffsSalary} />
                  )}
                />
                <Redirect to="/Nhanvien" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
