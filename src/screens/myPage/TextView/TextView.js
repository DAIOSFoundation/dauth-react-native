import React from 'react';
import styled from 'styled-components';

function TextView({children}) {
  console.log('text: ', children);
  return (
    <TextViews>
      <TextTitle>{children}</TextTitle>
    </TextViews>
  );
}

export default TextView;

const TextViews = styled.View`
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: #cbd0d5;
  font-size: 16px;
  padding-bottom: 4px;
`;

const TextTitle = styled.Text`
  font-size: 14px;
  color: #48515a;
`;
