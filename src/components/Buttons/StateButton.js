import React from 'react';
import styled from 'styled-components';

function StateButton({children, style, onPress}) {
  return (
    <Button style={style} onPress={onPress}>
      <ButtonText style={style}>{children}</ButtonText>
    </Button>
  );
}

export default StateButton;

const Button = styled.TouchableOpacity`
  width: 74px;
  height: 29px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: #1d5187;
  border-top-right-radius: 18px;
  border-top-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-bottom-left-radius: 18px;
  margin-left: 10px;
`;

const ButtonText = styled.Text`
  font-size: 12px;
  font-weight: 700;
  color: #1d5187;
`;
