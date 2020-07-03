import React from 'react';
import styled from 'styled-components';

function StageButton({children, style, onPress}) {
  return (
    <Button style={style} onPress={onPress}>
      <ButtonText style={style}>{children}</ButtonText>
    </Button>
  );
}

export default StageButton;

const Button = styled.TouchableOpacity`
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 52px;
  background-color: #1d5187;
  /* &:hover {
    cursor: pointer;
  } */
`;

const ButtonText = styled.Text`
  font-size: 16px;
  color: #ffffff;
`;
