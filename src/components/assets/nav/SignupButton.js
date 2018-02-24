import React from "react";
import { Button, Icon } from "semantic-ui-react";

const SignupButton = props => {
  return (
    <div>
      <Button
        size="mini"
        animated="fade"
        color="blue"
        onClick={props.handleClick}
      >
        <Button.Content visible>Sign Up</Button.Content>
        <Button.Content hidden>
          <Icon name="user" />
        </Button.Content>
      </Button>
    </div>
  );
};

export default SignupButton;
