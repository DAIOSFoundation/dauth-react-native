import React from 'react';
import styled from 'styled-components';

function Inputs({placeholder}) {
  return <Input placeholder={placeholder} />;
}

export default Inputs;

const Input = styled.TextInput`
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: #cbd0d5;
  font-size: 16px;
  padding-bottom: 4px;
`;
