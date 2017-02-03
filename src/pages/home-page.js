import React from 'react';

export default class HomePage extends React.Component {
    render() {
    const session = this.props.session
    return (
        <div>
          <ul>
          <li>
            <h3>Session Title</h3>
            <p>A description of the said title. I also need to add a date, and how long it lasted</p>
          </li>
          </ul> 
        </div>
    );
  }
}