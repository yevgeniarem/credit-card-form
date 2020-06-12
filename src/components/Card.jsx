import React from 'react';

export default function Card() {
  const currentCardBackground = Math.floor(Math.random() * 25 + 1);

  const getCardType = () => {
    return 'visa';
  };

  return (
    <div className="card">
      <img
        src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${currentCardBackground}.jpeg`}
        alt="random credit card background"
        className="card__background-img"
      />
      <img
        src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
        alt="credit card chip"
        className="card__chip"
      />
      <img
        src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${getCardType()}.png`}
        alt="credit card logo"
        className="card__logo"
      />
      <div className="card__numbers">#### #### #### ####</div>
      <div className="card__input-group card__input-group--name">
        <div className="card__input-title">Card Holder</div>
        <div className="card__input-response">FULL NAME</div>
      </div>
      <div className="card__input-group card__input-group--date">
        <div className="card__input-title">Expires</div>
        <div className="card__input-response">MM/YY</div>
      </div>
    </div>
  );
}
