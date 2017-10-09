import React from 'react';
import { Col, Panel } from 'react-bootstrap';

const Item = ({content}) => (
  <Col xs={4}>
    <Panel>
      <h2>Việc Cần Làm</h2>
      <p>Những thứ cần phải hoàn thành. </p>
    </Panel>
  </Col>
);
export default Item;
