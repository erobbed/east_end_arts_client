import React from "react";
import Footer from "../assets/Footer";
import GroupContainer from "../groups/GroupContainer";
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
      15: true,
      selected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    };

    handleChange = (e, obj) => {
      this.setState({ selected: obj.value });
    };

    render() {
      let groups = this.props.loggedIn
        ? { width: "100%", opacity: "1" }
        : { width: "0px", opacity: "0" };

      const eventsList = this.props.myEventsList.filter(event =>
        this.state.selected.includes(event.category_id)
      );

      const options = this.props.categories.map(category => {
        return { key: category.id, text: category.name, value: category.id };
      });

      let bool = this.props.user && this.props.user.admin ? false : true;

      return (
        <div className="filter column riight" style={this.props.style}>
          <h2 className="title">
            calendar of arts and culture on the east end
          </h2>
          {this.props.loggedIn ? (
            <GroupContainer
              groups={this.props.groups}
              selectedGroup={this.props.selectedGroup}
              css={groups}
            />
          ) : null}
          <Calendar
            myEventsList={eventsList}
            user={this.props.user}
            notice={this.props.notice}
          />
          <Dropdown
            placeholder="Filter Categories"
            fluid
            multiple
            selection
            options={options}
            onChange={this.handleChange}
            className="categories"
            defaultValue={this.state.selected}
          />
          <Footer usable={bool} user={this.props.user} />
        </div>
      );
    }
  };
}
