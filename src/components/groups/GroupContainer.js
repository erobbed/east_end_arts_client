import React from "react";
import Group from "./Group";
import { Dropdown } from "semantic-ui-react";
import AddGroupModal from "./AddGroupModal";
import AddEventModal from "../events/AddEventModal";

class GroupContainer extends React.Component {
  render() {
    let sortable = (a, b) => {
      let newA =
        a.name.split(" ")[0] === "The"
          ? a.name.split(" ")[1]
          : a.name.split(" ")[0];
      let newB =
        b.name.split(" ")[0] === "The"
          ? b.name.split(" ")[1]
          : b.name.split(" ")[0];
      return newA < newB ? -1 : newA > newB ? 1 : 0;
    };
    let groups = this.props.groups
      .sort((a, b) => sortable(a, b))
      .map(group => (
        <Group
          group={group}
          key={group.id}
          text={group.name}
          selectedGroup={this.props.selectedGroup}
          value={group.name}
        />
      ));

    console.log(this.props.selectedGroup.name);

    return (
      <div style={this.props.css}>
        <Dropdown
          className="groups"
          placeholder="Select Group"
          fluid
          selection
          options={groups}
          value={this.props.selectedGroup ? this.props.selectedGroup.name : ""}
        />
        <AddGroupModal />
        {this.props.selectedGroup ? (
          <AddEventModal group={this.props.selectedGroup} />
        ) : null}
      </div>
    );
  }
}

export default GroupContainer;
