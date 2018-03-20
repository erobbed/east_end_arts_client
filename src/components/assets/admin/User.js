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
          <List.Header>
            {this.props.username}
            {this.props.admin ? (
              <Checkbox
                label="Admin"
                toggle
                style={{ float: "right" }}
                onChange={this.handleChange}
                defaultChecked
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
