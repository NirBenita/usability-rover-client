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
  height:100vh;
  padding:12px;
  background-color: GHOSTWHITE;
`

const Message = styled.li`
  font-size: 1rem;
  background-color: white;
  border-radius:6px;
  margin-bottom:6px;
  color: SlateGrey;
  display:flex;
  align-items:center;

  .avatar {
    align-self:flex-start;
  }
`;

const MessageStack = styled.ul`
  list-style: none;
`;
const Avatar = styled.img`
  background:salmon;
  margin:12px
`

const Username = styled.p`
  font-weight:800;
  color:black;
`
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
            {session.messages.map(msg => <Message>
              <Avatar className="avatar" src={msg.avatar}/>
              <div>
                <Username>{msg.user}</Username>
                <p>{msg.text}</p>
              </div>
            </Message>)}
          </MessageStack>
        </FlexContainer>
    );
  }
}