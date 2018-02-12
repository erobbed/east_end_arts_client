import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectGroup, deselectGroup } from "../actions/groupActions";

class Group extends React.Component {
  handleClick = () => {
    if (this.props.selectedGroup) {
      if (this.props.selectedGroup.id === this.props.group.id) {
        this.props.deselectGroup();
      } else {
        this.props.selectGroup(this.props.group);
      }
    } else {
      this.props.selectGroup(this.props.group);
    }
  };

  render() {
    let style =
      this.props.selectedGroup.id === this.props.group.id
        ? {
            fontWeight: "bold",
            textDecoration: "underline",
            color: "white",
            background: "rgb(53,117,171)"
          }
        : { fontWeight: "normal" };
    return (
      <div>
        <div className="group" onClick={this.handleClick} style={style}>
          {this.props.group.name}
          {this.props.group.id === this.props.selectedGroup.id ? (
            <div style={{ float: "right" }}> X </div>
          ) : null}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectGroup, deselectGroup }, dispatch);
}

export default connect(null, mapDispatchToProps)(Group);
