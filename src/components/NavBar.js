import React from 'react';
import { Menu, Segment, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component{

  state = {
    activeItem: 'Home'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){

    const { activeItem } = this.state

    return(
      <Segment inverted className="nav">
        <Menu inverted pointing secondary className="main-nav" size="tiny">
          <Menu.Item as={NavLink} to="/" exact name="Home" active={activeItem === 'Home'} onClick={this.handleItemClick} key="home" />
          <Menu.Menu position="right" key="right">
            <Menu.Item as={NavLink} to="/login" key="login">
              <Button basic inverted secondary color="black" id="login">Log In</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}

export default NavBar
