import React from 'react';
import styled from 'styled-components';

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
    

export {
  FlexContainer,
  Label
}
