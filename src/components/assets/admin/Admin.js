import React from "react";
import { Modal } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getUsers } from "../../../actions/userActions";
import { toggleAdmin } from "../../../actions/userActions";
import UserContainer from "./UserContainer";

const Admin = props => {
  return (
    <Modal
      size="tiny"
      trigger={
        <button id="admin" onClick={props.getUsers}>
          Admin Panel
        </button>
      }
    >
      <Modal.Content>
        <UserContainer users={props.users} toggleAdmin={props.toggleAdmin} />
      </Modal.Content>
    </Modal>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getUsers, toggleAdmin }, dispatch);
}

function mapStateToProps(state) {
  return {
    users: state.users.all
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
