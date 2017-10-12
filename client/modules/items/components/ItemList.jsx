import React from 'react';
import Item from './Item.jsx';
import { Row, Col, Glyphicon } from 'react-bootstrap';
const ItemList = ({content}) => (
<Row className="show-grid">
  <Col xs={12}>
    <a href="/edit"><Glyphicon glyph="plus"></Glyphicon> New Item</a>
   </Col>
</Row>
);

 export default ItemList;
