import React from "react";
import { Button, Icon } from "semantic-ui-react";

const LoginButton = props => {
  return (
    <div>
      <Button
        size="mini"
        animated="fade"
        color="green"
        onClick={props.handleClick}
      >
        <Button.Content visible>Log In</Button.Content>
        <Button.Content hidden>
          <Icon name="user" />
        </Button.Content>
      </Button>
    </div>
  );
};

export default LoginButton;
