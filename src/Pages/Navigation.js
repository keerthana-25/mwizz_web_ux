import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export class Navigation extends Component {
  render() {
    return (
        <nav>
        <NavLink to="/processLog">Request Log Process </NavLink>
        <NavLink to="/status">Get Status </NavLink>
        {/* <NavLink to="/updatePolicy">Update Policy</NavLink> */}
        <NavLink to="/allRequestDetails">Get All Request Details</NavLink>
        </nav>
    )
  }
}

export default Navigation