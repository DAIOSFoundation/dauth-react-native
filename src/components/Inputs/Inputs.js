import React from 'react';
import styled from 'styled-components';

<<<<<<< HEAD
function Inputs({placeholder, handleChange}) {
  return <Input onChange={handleChange} placeholder={placeholder} />;
=======
function Inputs({placeholder, handleChange, name, value, secureTextEntry}) {
  return (
    <Input
      onChangeText={text => handleChange({name, text})}
      placeholder={placeholder}
      name={name}
      secureTextEntry={secureTextEntry}
      // value={value}
    />
  );
>>>>>>> 26790f30... [Add] login, signup 페이지 리덕스 구현
}

export default Inputs;

const Input = styled.TextInput`
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: #cbd0d5;
  font-size: 16px;
  padding-bottom: 4px;
`;
