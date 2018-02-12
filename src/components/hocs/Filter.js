import React from "react";
import { Dropdown } from "semantic-ui-react";

export default function withFilter(Calendar) {
  return class extends React.Component {
    state = {
      1: true,
      2: true,
      3: true,
      4: true,
      5: true,
      6: true,
      7: true,
      8: true,
      9: true,
      10: true,
      11: true,
      12: true,
      13: true,
      14: true,
      15: true
    };

    handleChange = (e, obj) => {
      this.setState({ [obj.value]: !this.state[obj.value] });
    };

    render() {
      const eventsList = this.props.myEventsList.filter(
        event => this.state[event.category_id]
      );

      console.log(eventsList);

      const options = this.props.categories.map(category => {
        return { key: category.id, text: category.name, value: category.id };
      });

      return (
        <div className="filter column riight" style={this.props.style}>
          <h3>Calendar of Arts and Culture on the East End</h3>
          <Dropdown
            placeholder="Filter Categories"
            fluid
            multiple
            selection
            options={options}
            onChange={this.handleChange}
            className="categories"
          />
          <Calendar
            myEventsList={eventsList}
            user={this.props.user}
            notice={this.props.notice}
          />
        </div>
      );
    }
  };
}
