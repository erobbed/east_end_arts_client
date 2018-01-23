import React from "react";
import { Checkbox } from "semantic-ui-react";

export default class Filter extends React.Component {
  state = {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true
  };

  handleChange = (e, obj) => {
    this.setState({ [obj.value]: !this.state[obj.value] }, () =>
      this.props.checkbox(this.state)
    );
  };

  render() {
    return (
      <div className="filter">
        {this.props.categories.map(category => (
          <Checkbox
            label={category.name}
            value={category.id}
            onChange={this.handleChange}
            key={category.id}
            defaultChecked
          />
        ))}
      </div>
    );
  }
}
