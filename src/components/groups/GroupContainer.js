import React from "react";
import { Dropdown } from "semantic-ui-react";
import AddGroupModal from "./AddGroupModal";
import AddEventModal from "../events/AddEventModal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectGroup, deselectGroup } from "../../actions/groupActions";

class GroupContainer extends React.Component {
  handleChange = (e, { value }) => {
    if (this.props.selectedGroup) {
      if (this.props.selectedGroup.id === value) {
        this.props.deselectGroup();
      } else {
        this.props.selectGroup(value);
      }
    } else {
      this.props.selectGroup(value);
    }
  };

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

    let groups = this.props.groups.sort((a, b) => sortable(a, b)).map(group => {
      return { key: group.id, text: group.name, value: group.id };
    });

    return (
      <div style={this.props.css}>
        <Dropdown
          className="groups"
          placeholder="Select Group"
          fluid
          selection
          options={groups}
          onChange={this.handleChange}
          value={this.props.selectedGroup ? this.props.selectedGroup.id : ""}
        />
        <AddGroupModal />
        {this.props.selectedGroup ? (
          <AddEventModal group={this.props.selectedGroup} />
        ) : null}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectGroup, deselectGroup }, dispatch);
}

export default connect(null, mapDispatchToProps)(GroupContainer);
