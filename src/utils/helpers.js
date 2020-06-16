// eslint-disable-next-line import/prefer-default-export
export const getCardType = (cardsInfo, number) => {
  const card =
    cardsInfo &&
    cardsInfo.find((c) => number.match(new RegExp(c.regex)) !== null);
  return (card && card.type) || 'visa';
};
