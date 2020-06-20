import React from 'react';
import { useSelector } from 'react-redux';

import { currentCardBackground, IMG_URL } from '../utils/constants';

export default function CardBack() {
  const { cvv, cardType } = useSelector((state) => state.card);

  return (
    <div className="card card--back">
      <img
        src={`${IMG_URL}/${currentCardBackground}.jpeg`}
        alt="random credit card background"
        className="card__background-img"
      />
      <div className="card__band" />
      <div className="card__cvv-title">CVV</div>
      <div className="card__cvv-band" />
      <div className="card__cvv-text">{cvv}</div>
      <img
        src={`${IMG_URL}/${cardType}.png`}
        alt="credit card logo"
        className="card__logo--back"
      />
    </div>
  );
}
