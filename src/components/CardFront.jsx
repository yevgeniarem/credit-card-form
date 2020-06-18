import React from 'react';
import { useSelector } from 'react-redux';

import { currentCardBackground, IMG_URL, cardsInfo } from '../utils/constants';
import { getCardType } from '../utils/helpers';

export default function CardFront() {
  const { number, name, month, year } = useSelector((state) => state.card);

  return (
    <div className="card card--front">
      <img
        src={`${IMG_URL}/${currentCardBackground}.jpeg`}
        alt="random credit card background"
        className="card__background-img"
      />
      <img
        src={`${IMG_URL}/chip.png`}
        alt="credit card chip"
        className="card__chip"
      />
      <img
        src={`${IMG_URL}/${getCardType(cardsInfo, number)}.png`}
        alt="credit card logo"
        className="card__logo"
      />
      <div className="card__numbers">{number}</div>
      <div className="card__input-group card__input-group--name">
        <div className="card__input-title">Card Holder</div>
        <div className="card__input-response">{name}</div>
      </div>
      <div className="card__input-group card__input-group--date">
        <div className="card__input-title">Expires</div>
        <div className="card__input-response">
          {month}/{year.toString().substr(-2)}
        </div>
      </div>
    </div>
  );
}
