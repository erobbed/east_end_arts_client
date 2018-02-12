import React from "react";

export default class About extends React.Component {
  render() {
    const members = [
      "Hope Sandrow, Chair",
      "Geoffrey Drummond",
      "April Gornik",
      "Dorothy Lichtenstein",
      "Minerva Perez",
      "Elka Rifkin",
      "Brenda Simmons",
      "Terrie Sultan",
      "Shane Weeks"
    ];

    return (
      <div>
        <h6>COMMITTEE MEMBERS</h6>
        <ul>{members.map((mem, ind) => <li key={ind}>{mem}</li>)}</ul>
        <h6>EX-OFFICIO </h6>
        <ul>
          <li>Jay Schneiderman, Town Supervisor</li>
          <li>jschneiderman@southamptontownny.gov</li>
          <li>631-283-6055</li>
          <br />
          <li>Tommie John Schiavoni, Town Council Liaison</li>
          <li>tjschiavoni@southamptontownny.gov</li>
          <li>631-287-5745</li>
        </ul>
      </div>
    );
  }
}
