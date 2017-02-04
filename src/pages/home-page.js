import React from 'react';
import styled from 'styled-components';

import {
  Label
} from '../components/primitives.js'

const MenuItem = styled.li`
  width:100%;
  text-align:center;
  border-bottom: 1px solid GHOSTWHITE;
  padding:24px;
  cursor:pointer;

  h1 {
    font-size:24px;
    color:#152D3C;
  }

  &:hover {
    background-color:GHOSTWHITE;
  }
`
var gaga = ['', '', '', '']

export default class HomePage extends React.Component {
    render() {
      return (
          <div>
            <ul>
            {gaga.map(()=> <MenuItem>
              <h2>Session Title</h2>
              <Label>🗓 Date</Label>
              <Label> ⌛ Duration </Label>
              <p>A description of the said title. I also need to add a date, and how long it lasted</p>
            </MenuItem>
            )}
            </ul> 
          </div>
      );
  }
}