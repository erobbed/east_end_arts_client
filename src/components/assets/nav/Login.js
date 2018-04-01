import React from "react";
import { Form, Input, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login } from "../../../actions/authActions";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    let valid = true;
    for (var prop in this.state) {
      if (!this.state[prop]) {
        valid = false;
        alert(`${prop} cannot be blank`);
      }
    }

    if (valid) {
      this.props.login(this.state).then(failure => {
        if (failure) {
          alert(failure);
        }
      });
    } else {
      e.preventDefault();
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Username</label>
          <Input
            placeholder="username"
            onChange={this.handleChange}
            id="username"
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input
            type="password"
            placeholder="password"
            onChange={this.handleChange}
            id="password"
          />
        </Form.Field>
        <Button type="submit" className="new">
          Log In
        </Button>
      </Form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}

export default connect(null, mapDispatchToProps)(Login);
