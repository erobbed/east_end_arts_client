# SHACC Calendar - User Guide 2018

This calendar is a public web application built for the Southampton Arts and Culture Committee (SHACC) and hosted at https://www.shacc.art. It was developed with React.js using 'create-react-app' and a Ruby on Rails API utilizing a PostgreSQL database and deployed client-side through Google Firebase and Heroku for the API. Below are the repository links:

* [**API**](https://github.com/erobbed/east_end_arts)

* [**Client**](https://github.com/erobbed/east_end_arts_client)

To run the application locally, make sure to run `rails s` in the Rails API's root directory and start up a server for the API. Allow origin '\*' for easiest configuration. Secondly in your .env file in this React app, be sure to reassign the `REACT_APP_RAILS_URL` variable to your `localhost` and corresponding port and enter `yarn start` or `npm start` to begin.

---

The app is divided into two segments: **Public** and **Planning**.

## Public Page:

The main landing page of https://www.shacc.art is the _public landing page_. This page displays only the public calendar, events filter and the red footer used for announcements. The public calendar is an interactive calendar displaying all published events for all groups registered on the site. Any visitor may click an event to view its details.

To filter events by category, a visitor can uncheck undesired categories in the events filter. By default, all categories are checked on page load.

## Planning Page:

The _private planning page_ of the site can be accessed at the following link: https://shacc.art/919ddbbc6483b8b243d0592f5432a2fd/login

From here, a visitor can either log in with an existing account or sign up as a new user. Once logged in, a user can now see the Group Filter Dropdown and Add Group option to create their group. The account that creates the group becomes the Group Admin; only the Group Admin or a Site Admin can publish or delete a group’s events.

Selecting a group from the dropdown will filter the events on the calendar to display all events for that particular group - _both published and unpublished_. Once selected, the Add Event button will appear for a the creation of a new event belonging to the selected group.

Lastly, users are segmented into two user types: Site Admin and General User/Group Admin.

Group Admins can create/delete and publish/unpublish events for their particular group/

Site Admin users have the following basic privileges as Group Admins however this applies to all groups. Additionally, Site Admins have the following special privileges:

* Can toggle admin privileges in the admin panel found on the below admin url:
  https://shacc.art/919ddbbc6483b8b243d0592f5432a2fd/admin
* Can edit the footer to post site-wide announcements

## Video Resources:

**Admin and Banner** \
https://drive.google.com/open?id=1RDfRtJYIACy50bTN-CPyC1v1o_nnvg8U

**Publishing an Event and Toggling Admin Permissions** \
https://drive.google.com/open?id=1yeNQjWc23wOmg8IOw7AUOtuzvDMo0lAQ
