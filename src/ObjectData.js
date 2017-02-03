import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './react-bootstrap-table-all.min.css';

var products = [{
      id: 1,
      name: "Product1",
      price: 120
  }, {
      id: 2,
      name: "Product2",
      price: 80
  }, {
      id: 3,
      name: "Product3",
      price: 180
  }];

const ObjectData = () => (
  <BootstrapTable data={products} >
    <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
    <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
    <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
  </BootstrapTable>
)

export default ObjectData;





