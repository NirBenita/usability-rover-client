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
    border-right: 1px solid GHOSTWHITE;
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
  `

  const MessageStack = styled.ul`
    list-style: none;
  `
  const Avatar = styled.img`
    background:salmon;
    margin:12px
  `

  const Username = styled.p`
    font-weight:800;
    color:black;
  `
  
export {
  FlexContainer,
}
