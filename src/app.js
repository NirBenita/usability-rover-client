import React from 'react';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display:flex;

  > * {
    flex:1;
  }
`

const SessionInfo = styled.section`
  max-width:276px;
  height:100%;
  padding:12px;
`

const Message = styled.li`
  font-size: 1rem;
  background-color: white;
  border-radius:6px;
  margin-bottom:6px;
  color: SlateGrey;
  font-family: ${props => props.theme.systemFonts};
  padding:12px;
`;

const MessageStack = styled.ul`
  list-style: none;
  padding:12px;
`;

export default class App extends React.Component {
  render() {
    const session = this.props.session
    return (
        <FlexContainer>
          <SessionInfo>
            <h1>{session.name}</h1>
            <p>Started at {new Date(parseInt(session.startTime)).toString()}</p>
            <p>Lasted {(Math.floor((parseInt(session.startTime) - parseInt(session.endTime)) / 1000))} seconds</p>
          </SessionInfo>
          <MessageStack>
            {session.messages.map(msg => <Message>{msg.text}</Message>)}
          </MessageStack>
        </FlexContainer>
    );
  }
}