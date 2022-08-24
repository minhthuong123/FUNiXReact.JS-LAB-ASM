import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardTitle } from "reactstrap";


class DanhsachPB extends Component {
    render() {
         const menu = this.props.danhsachPB.map((dish) => {
           return (
             <div
               className="col-md-2 col-sm-4 col-xs-12"
               key={dish.id}
               style={{ marginBottom: "10px" }}
             >
               <Card>
                   <CardImg width="100%" src={dish.image} alt={dish.name} />
                   <CardBody
                     style={{
                       textAlign: "center",
                     }}
                   >
                     <CardTitle>{dish.name}</CardTitle>
                   </CardBody>
               </Card>
             </div>
           );
         });

         
        return (
            <div>
                 <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/Phongban">Phòng Ban</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Danh sách phong ban</BreadcrumbItem>
          </Breadcrumb>
          <hr />
        </div>
        <div className="row">{menu}</div>
      </div>
            </div>
        );
    }
}
export default DanhsachPB
