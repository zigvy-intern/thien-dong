import React from 'react';
import { Row, Col, Panel, Glyphicon } from 'react-bootstrap';
const Item = ({content}) => (
  <Col xs={4}>
    <Panel>
      <Row>
        <Col xs={10}>
          <a href="/"><Glyphicon glyph="chevron-left"></Glyphicon> Back to Items</a>
          <h2>Thing to do</h2>
          </Col>
          <Col xs={2}>
          <a href="/edit"><Glyphicon glyph="pencil"></Glyphicon></a>
          </Col>
      </Row>
        <p>AAAAAAA</p>
    </Panel>
  </Col>
);
export default Item;
