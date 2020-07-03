import React from 'react';
import styled from 'styled-components';

function AreaTit({children, style}) {
  return <AreaTitile style={style}>{children}</AreaTitile>;
}

export default AreaTit;

const AreaTitile = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: #1d5187;
`;
