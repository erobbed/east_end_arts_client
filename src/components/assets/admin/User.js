import React from "react";
import { List, Checkbox } from "semantic-ui-react";

class User extends React.Component {
  handleChange = () => {
    this.props.handleChange(this.props.id);
  };

  render() {
    return (
      <List.Item>
        <List.Content>
          <List.Header className="user">
            {this.props.username}
            {this.props.admin ? (
              <Checkbox
                label="Admin"
                toggle
                style={{ float: "right" }}
                onChange={this.handleChange}
                defaultChecked
                className="admin-toggle"
              />
            ) : (
              <Checkbox
                label="Admin"
                toggle
                style={{ float: "right" }}
                onChange={this.handleChange}
              />
            )}
          </List.Header>
        </List.Content>
      </List.Item>
    );
  }
}

export default User;
