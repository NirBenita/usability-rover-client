import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const defaultTheme = {
  systemFonts: '"-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;'
};

const Message = styled.li`
  font-size: 1rem;
  background-color: Cornsilk;
  color: SlateGrey;
  font-family: ${props => props.theme.systemFonts};
  padding:12px;
`;

const MessageStack = styled.ul`
  list-style: none;
  padding:0;
`;

export default class App extends React.Component {
  render() {
    const session = this.props.session
    return (
      <ThemeProvider theme={defaultTheme}>
        <div>
          <h1>{session.name}</h1>
          <p>Started at {new Date(session.startTime).toString}, lasted {(Math.floor((session.startTime - session.endTime)/1000))} seconds</p>
          <MessageStack>
            {session.messages.map(msg => <Message>{msg.text}</Message>)}
          </MessageStack>
        </div>
      </ThemeProvider>
      );
  }
}

