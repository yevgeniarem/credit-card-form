import React from 'react';
import { useSelector } from 'react-redux';

import { currentCardBackground, IMG_URL } from '../utils/constants';
import { determineNumbers, generateLogoUrl } from '../utils/helpers';

export default function CardFront() {
  const { number, name, month, year, cardType } = useSelector(
    (state) => state.card,
  );

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
        src={generateLogoUrl(cardType)}
        alt="credit card logo"
        className="card__logo"
      />
      {/* <div className="card__numberMask">{determineCardMask(cardType)}</div> */}
      <div className="card__numbers">{determineNumbers(cardType, number)}</div>
      <div className="card__input-group card__input-group--name">
        <div className="card__input-title">Card Holder</div>
        <div className="card__input-response">{name || 'FULL NAME'}</div>
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
