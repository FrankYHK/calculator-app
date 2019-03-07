export const plus = (value1, value2) => {
  return parseInt(value1) + parseInt(value2);
}

export const minus = (value1, value2) => {
  return parseInt(value1) - parseInt(value2);
}

export const multiply = (value1, value2) => {
  return parseInt(value1) * parseInt(value2);
}

export const divide = (value1, value2) => {
  return Math.round((parseInt(value1) / parseInt(value2))*100)/100;
}
