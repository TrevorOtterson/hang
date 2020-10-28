import React, { Component } from 'react';
import './JoinHang.css';
import { Dropdown, DropdownButton } from "react-bootstrap";

export default class JoinHang extends Component {
  render() {
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h1>Join Hang</h1>
          {/*DropDown */}
          <DropdownButton id="dropdown-basic-button" title="CreateHangInfo Event: Snowboarding">
            <Dropdown.Item>Participants: 4</Dropdown.Item>
            <Dropdown.Item>Skill Level: Expert</Dropdown.Item>
            <Dropdown.Item>Location: Park City</Dropdown.Item>
            <Dropdown.Item>Details: Let's Shred. See you there.</Dropdown.Item>
          </DropdownButton>
          <p>Test text</p>
        </div>
      </div>

    );
  }
}
