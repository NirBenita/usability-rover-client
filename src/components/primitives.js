import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const FlexContainer = styled.div`
  display:flex;

  > * {
    flex:1;
  }
`

const Label = styled.span`
  font-size: 14px;
  color: #B6C1CD;
  line-height: 24px;
`

const LinkTo = styled(Link)`
  text-decoration: none;
  color:inherit;
  
  &:visited {
    color:inherit;
  }
`
export {
  FlexContainer,
  Label,
  LinkTo
}
