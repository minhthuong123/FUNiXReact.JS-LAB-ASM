import React, { Component } from "react";
import "./App.css";
import { STAFFS } from "./StaffList/staffs";
import StaffListComponent from "./StaffList/StaffListComponent";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
    };
  }

  render() {
    return (
      <div className="App">
        <div className="heading">
          <h1>Ứng dụng quản lý nhân sự v1.0</h1>
        </div>

        <StaffListComponent staffs={this.state.staffs}/>
      </div>
    );
  }
}

export default App;
