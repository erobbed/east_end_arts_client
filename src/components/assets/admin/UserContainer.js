import React from "react";
import User from "./User";
import { List } from "semantic-ui-react";

export default class UserContainer extends React.Component {
  handleChange = id => {
    this.props.toggleAdmin(id);
  };

  render() {
    const users = this.props.users.map(user => (
      <User {...user} key={user.id} handleChange={this.handleChange} />
    ));
    return <List celled>{users}</List>;
  }
}
