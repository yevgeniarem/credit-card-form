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

export const isCardTypeRecognized = (cardType) =>
  recognizedCardTypes.includes(cardType);

export const generateLogoUrl = (cardType) =>
  `${IMG_URL}/${
    cardType === 'diners' || cardType === 'uatp' ? 'visa' : cardType
  }.png`;

export const determineMonth = (month, year) => {
  return Number(year) === moment().year() && month < moment().month()
    ? 'MM'
    : month || 'MM';
};

export const fadeInVariants = (focusInfo) => {
  const {
    left: oldLeft,
    top: oldTop,
    width: oldWidth,
    height: oldHeight,
  } = focusInfo.old;
  const {
    left: newLeft,
    top: newTop,
    width: newWidth,
    height: newHeight,
  } = focusInfo.new;

  return {
    hidden: {
      left: oldLeft,
      top: oldTop,
      width: oldWidth,
      height: oldHeight,
    },
    visible: {
      left: newLeft,
      top: newTop,
      width: newWidth,
      height: newHeight,
      transition: {
        ease: 'easeOut',
        duration: 0.2,
      },
    },
  };
};
