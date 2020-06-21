import moment from 'moment';

export const IMG_URL =
  'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images';

export const currentCardBackground = Math.floor(Math.random() * 25 + 1);

export const months = [...new Array(12)].map((m, idx) => ({
  id: idx + 1,
  value: idx + 1 < 10 ? `0${idx + 1}` : idx + 1,
}));

moment().format();
export const years = [...new Array(11)].map((y, idx) => ({
  id: idx + 1,
  value: moment().year() + idx,
}));

export const cardMasks = {
  default: '#### #### #### ####',
  amex: '#### ###### #####',
  diners: '#### ###### ####',
  uatp: '#### ##### ######',
};

export const recognizedCardTypes = [
  'visa',
  'amex',
  'mastercard',
  'discover',
  'troy',
  'diners',
  'uatp',
];

// TODO: don't have diners and uatp logos
