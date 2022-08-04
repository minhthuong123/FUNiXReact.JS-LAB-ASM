import React from "react";
import "../App.css";

import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

function RenderMenuItem({ staffs, onClick }) {
  const navigate = useNavigate()
  return (
    <Card onClick={()=>{navigate(`/ThongTinNV/${staffs.id}`, { replace: true });}}>
        <CardImg width="50%" src={staffs.image} alt={staffs.name} />
        <CardBody
          style={{
            textAlign: "center",
          }}
        >
          <CardTitle >{staffs.name}</CardTitle>
        </CardBody>
    </Card>
  );
}

const NhanVien = (props) => {
  let nhanvien;
  if(props.search==""){
nhanvien = props.staffs.map((staffs) => {
  return (
    <div
      className="col-md-2 col-sm-4 col-xs-6 hover"
      key={staffs.id}
      style={{ marginBottom: "20px" }}
    >
      <RenderMenuItem staffs={staffs} />
    </div>
  );
});
  }else{
    nhanvien = props.search.map((search) => {
      return (
        <div
          className="col-md-2 col-sm-12 col-xs-6 hover"
          key={search.id}
          style={{ marginBottom: "20px" }}
        >
          <RenderMenuItem staffs={search} />
        </div>
      );
    });
  }
  

  return (
    <div className="container containerNV">
      <div className="row">
        <div className="col-12">
          <h3>Nhân Viên</h3>
          <hr />
        </div>
      </div>

      <div className="row" >
        {nhanvien}
      </div>
    </div>
  );
};



export default NhanVien;
