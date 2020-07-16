import moment from 'moment';

moment().format();

export const slideUpVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.2,
    },
  },
};

export const slideLeftVariants = {
  hidden: {
    opacity: 0,
    x: 15,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.2,
    },
  },
};

export const IMG_URL =
  'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images';

export const currentCardBackground = Math.floor(Math.random() * 25 + 1);

export const months = [...new Array(12)].map((m, idx) => ({
  id: idx + 1,
  value: idx + 1 < 10 ? `0${idx + 1}` : idx + 1,
}));

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
