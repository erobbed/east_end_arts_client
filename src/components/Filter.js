import React from "react";
import { Dropdown } from "semantic-ui-react";

const Dropdown = props => {
  return (
    <Dropdown
      placeholder="Filter Events By Category"
      fluid
      selection
      options={props.events.categories}
    />
  );
};
