import React from "react";
import { Checkbox } from "semantic-ui-react";

export default function withFilter(Calendar) {
  return class extends React.Component {
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
      this.setState({ [obj.value]: !this.state[obj.value] });
    };

    render() {
      const eventsList = this.props.myEventsList.filter(
        event => this.state[event.category_id]
      );

      return (
        <div className="filter column riight" style={this.props.style}>
          <Calendar myEventsList={eventsList} user={this.props.user} />
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
  };
}
