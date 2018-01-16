import React from 'react';
import { Modal, Card } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { publish } from '../actions/eventActions';
import PublishButton from './PublishButton';
import MapContainer from './Map'

class Event extends React.Component{

  state = {
    open: this.props.open
  }

  handleClose = () => {
    this.setState({ open: !this.state.open })
    this.props.close()
  }

  publish = () => {
    this.props.publish(this.props.event.id)
  }

  render(){
    console.log(this.props.event);
    return(
      <Modal size='tiny' open={this.state.open} closeIcon onClose={this.handleClose}>
        <Modal.Header>
          {this.props.event.title}
          <PublishButton public={this.props.event.public} publish={this.publish}/>
        </Modal.Header>
        <Modal.Content>
          <Card className='event'>
            <Card.Content>
              <Card.Description>
                {this.props.event.details}
              </Card.Description>
              <Card.Meta>
                {this.props.event.startDate.format('MMMM Do YYYY, h:mm a')} to <br/>{this.props.event.endDate.format('MMMM Do YYYY, h:mm a')}
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <label>Where:</label>
              <MapContainer place={this.props.event.location} />
            </Card.Content>
          </Card>
        </Modal.Content>
      </Modal>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({publish}, dispatch)
}

function mapStateToProps(state){
  return {user: state.auth.user}
}

export default connect(mapStateToProps, mapDispatchToProps)(Event)
