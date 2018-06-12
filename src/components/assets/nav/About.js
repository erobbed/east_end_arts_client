import React from "react";

export default class About extends React.Component {
  render() {
    const members = [
      "Hope Sandrow, Chair *",
      "Geoffrey Drummond *",
      "April Gornik *",
      "Dorothy Lichtenstein *",
      "Minerva Perez *",
      "Elka Rifkin *",
      "Brenda Simmons *",
      "Terrie Sultan *",
      "Shane Weeks *"
    ];

    return (
      <div>
        <div className="members">
          <h6>COMMITTEE MEMBERS</h6>
          <ul>{members.map((mem, ind) => <li key={ind}>{mem}</li>)}</ul>
        </div>
        <div className="members">
          <h6>EX-OFFICIO </h6>
          <ul>
            <li>Jay Schneiderman, Town Supervisor</li>
            <li>
              <a href="mailto:jschneiderman@southamptontownny.gov">
                jschneiderman@southamptontownny.gov
              </a>
            </li>
            <li>
              <a href="tel:+16312836055">+1 (631) 283-6055</a>
            </li>
            <li>Tommy John Schiavoni, Town Council Liaison</li>
            <li>
              <a href="mailto:tjschiavoni@southamptontownny.gov">
                tjschiavoni@southamptontownny.gov
              </a>
            </li>
            <li>
              <a href="tel:+16312875745">+1 (631) 287-5745</a>
            </li>
          </ul>
          <br />
          <p className="legend">* Founding Member 2017</p>
        </div>
        <div className="meetings">
          <h6>MEETINGS</h6>
          <p>
            SHACC Monthly Meetings <br />
            Town Hall Lower Level Meeting Room <br />
            116 Hampton Road Southampton, NY 11968
          </p>
        </div>
        <div className="resource">
          <div className="map" />
          <div className="canal" />
        </div>
      </div>
    );
  }
}
