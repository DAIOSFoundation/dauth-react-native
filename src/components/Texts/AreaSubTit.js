import React from 'react';
import styled from 'styled-components';

function AreaSubTit({children, style}) {
  return <SubText style={style}>{children}</SubText>;
}

export default AreaSubTit;

const SubText = styled.Text`
  font-size: 13px;
  color: #48515a;
  line-height: 20px;
`;
