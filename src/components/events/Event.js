import React from "react";
import { Modal, Card } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { publish } from "../../actions/eventActions";
import PublishButton from "./PublishButton";
import MapContainer from "../assets/Map";
import moment from "moment";

class Event extends React.Component {
  state = {
    open: this.props.open
  };

  handleClose = () => {
    this.setState({ open: !this.state.open });
    this.props.close();
  };

  publish = () => {
    this.props.publish(this.props.event.id);
  };

  render() {
    const group_admin =
      this.props.user &&
      this.props.selectedGroup &&
      this.props.selectedGroup.members
        .filter(mem => mem.group_admin)
        .map(mem => mem.user_id)
        .includes(this.props.user.id);
    const admin =
      group_admin || this.props.user.admin ? (
        <PublishButton
          public={this.props.event.public}
          publish={this.publish}
        />
      ) : null;
    return (
      <Modal
        size="tiny"
        open={this.state.open}
        closeIcon
        onClose={this.handleClose}
      >
        <Modal.Header>
          {this.props.event.title}
          {admin}
        </Modal.Header>
        <Modal.Content>
          <Card className="event">
            <Card.Content>
              <Card.Description>{this.props.event.details}</Card.Description>
              <Card.Meta>
                {moment(this.props.event.startDate).format(
                  "MMMM Do YYYY, h:mm a"
                )}
                <br />
                {moment(this.props.event.endDate).format(
                  "MMMM Do YYYY, h:mm a"
                )}
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <label>Where:</label>
              <MapContainer place={this.props.event.location} />
            </Card.Content>
          </Card>
        </Modal.Content>
      </Modal>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ publish }, dispatch);
}

function mapStateToProps(state) {
  return { user: state.auth.user, selectedGroup: state.groups.selectedGroup };
}

export default connect(mapStateToProps, mapDispatchToProps)(Event);
