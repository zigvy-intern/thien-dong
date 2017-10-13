﻿import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon } from 'react-bootstrap';

const NewUser = ({content}) => (
<Col xs={12} sm={6} smOffset={3}>
<Panel>
<h1>Register</h1>
<form>
<FormGroup>
<FormControl type="email" placeholder="Email" />
<FormControl type="password" placeholder="Password" />
<Button bsStyle="primary" type="submit" value="Sign Up"/></button>
</FormGroup>
</form>
</Panel>
</Col>
);
export default NewUser;
