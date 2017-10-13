import React from 'react';
import { Col, Panel, Input, Button, Glyphicon, FormGroup, FormControl } from 'react-bootstrap';

class NewUser extends React.Component {
  render() {
      const {error} = this.props;
      return (
        <Col xs={12} sm={6} smOffset={3}>
          <Panel>
            <h1>Register</h1>
            {error ? <p style={{color: 'red'}}>{error}</p> : null}
            <form>
              <FormGroup>
              <FormControl ref="email" type="email" placeholder="Email" />
              <FormControl ref="password" type="password" placeholder="Password" />
              <Button onClick={this.createUser.bind(this)}
              bsStyle="primary" type="submit" >Sign up </Button>
              </FormGroup>
            </form>
          </Panel>
        </Col>
      )
    }
    createUser(e) {
        e.preventDefault();
        const {create} = this.props;
        const {email, password} = this.refs;
        create(email.getValue(), password.getValue());
        email.getInputDOMNode().value = '';
        password.getInputDOMNode().value = '';
      }
    }
export default NewUser
