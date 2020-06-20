// eslint-disable-next-line import/prefer-default-export
export const updateMask = (mask, number) => {
  const maskArr = mask.split('');
  if (number.length - 1 === -1) return mask;
  if (number.charAt(number.length - 1) === ' ') {
    maskArr.splice(number.length - 2, 1, ' ');
  } else {
    maskArr.splice(number.length - 1, 1, ' ');
  }
  return maskArr.join('');
};
