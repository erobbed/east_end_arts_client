import React from 'react';
import { Menu, Segment, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { logOut} from '../../actions/authActions'
import ModalContainer from '../Modal'

class NavBar extends React.Component{

  state = {
    activeItem: 'Home'
  }

  handleLogout = () => {
    this.props.logOut()
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){

    const { activeItem } = this.state

    const logout = (
      <Button basic inverted secondary color="black" id="log" onClick={this.handleLogout}>Log Out</Button>
    )

    return(
      <Segment inverted className="nav">
        <Menu inverted pointing secondary className="main-nav" size="tiny">
          <Menu.Item as={NavLink} to="/" exact name="Home" active={activeItem === 'Home'} onClick={this.handleItemClick} key="home" />
          <Menu.Menu position="right" key="right">
            <Menu.Item>
              {this.props.loggedIn ? logout : <ModalContainer /> }
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}

function mapStateToProps(state){
  return {loggedIn: state.users.loggedIn, user: state.users.user}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({logOut}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
