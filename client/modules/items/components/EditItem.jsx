import React from 'react';
import { Col, Panel, FormControl, FormGroup, Button } from 'react-bootstrap';
const EditItem = ({content}) => (
<Col xs={12} sm={6} smOffset={3}>
<Panel>
<h1>Edit Item</h1>
<form>
<FormGroup>
<FormControl type="text" placeholder="Name" />
<FormControl type="textarea" placeholder="Description" />
<Button bsStyle="primary" type="submit">Save Item</Button>
</FormGroup>
</form>
</Panel>
</Col>
);
export default EditItem;
