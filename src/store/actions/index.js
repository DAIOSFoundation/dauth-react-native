export const handleColor = list => {
  return {
    type: 'HANDLE_COLOR',
    payload: list,
  };
};

export const handleDisplay = list => {
  return {
    type: 'HANDLE_DISPLAY',
    payload: list,
  };
};
