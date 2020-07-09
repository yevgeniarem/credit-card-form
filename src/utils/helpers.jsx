import moment from 'moment';

import { cardMasks, recognizedCardTypes, IMG_URL } from './constants';

moment().format();

export const determineCardMask = (cardType) => {
  // eslint-disable-next-line no-prototype-builtins
  if (cardMasks.hasOwnProperty(cardType)) return cardMasks[cardType];
  return cardMasks.default;
};

export const determineNumbers = (cardType, number) => {
  const maskArr = determineCardMask(cardType).split('');
  const numArr = number.split('');

  return maskArr
    .map((e, idx) => {
      if (e === ' ') return ' ';
      if (numArr[idx] === ' ') return '#';
      if (numArr[idx]) return numArr[idx];
      return '#';
    })
    .join('');
};

export const determineCardNumAnimations = (oldNums, newNums) => {
  const oldArr = oldNums.split('');
  const newArr = newNums.split('');

  return oldArr.map((n, idx) => {
    if (n !== newArr[idx]) return idx;
    return null;
  });
};

export const isCardTypeRecognized = (cardType) =>
  recognizedCardTypes.includes(cardType);

export const generateLogoUrl = (cardType) =>
  `${IMG_URL}/${
    cardType === 'diners' || cardType === 'uatp' ? 'visa' : cardType
  }.png`;

export const determineMonth = (month, year) => {
  return Number(year) === moment().year() && month < moment().month()
    ? 'month'
    : month || 'month';
};
