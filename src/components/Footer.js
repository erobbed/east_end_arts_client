import React from "react";
import ContentEditable from "react-contenteditable";
import { Button, Icon } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { setNotice } from "../actions/noticeActions";
import { connect } from "react-redux";

class Footer extends React.Component {
  state = {
    html: ""
  };

  handleChange = e => {
    this.setState({
      html: e.target.value
    });
  };

  handleClick = () => {
    this.props.setNotice(this.state);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasOwnProperty("notice") && nextProps.notice) {
      this.setState({
        html: nextProps.notice.html
      });
    }
  }

  render() {
    console.log(this.props.usable);
    return (
      <div className="footer">
        <ContentEditable
          html={this.state.html}
          disabled={this.props.usable}
          onChange={this.handleChange}
        />
        {this.props.user && this.props.user.admin ? (
          <Button
            size="tiny"
            icon
            style={{ float: "right", background: "transparent" }}
            onClick={this.handleClick}
          >
            <Icon name="checkmark box" />
          </Button>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { notice: state.notice.latest };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setNotice }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
