import React from 'react';

import CreditCard from './CreditCard';
import Form from './Form';

function App() {
  // eslint-disable-next-line no-lone-blocks
  {
    /* <div className="App">
        <div className="card-form">
          <div className="card-list">
            <div className={classNames('card-item', 'active' && isCardFlipped)}>
              <div className="card-item__side front">
                <div
                  className={classNames(
                    'card-item__focus',
                    'active' && focusElementStyle,
                  )}
                />
                <div className="card-item__cover">
                  <img
                    className="card-item__bg"
                    src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${currentCardBackground}.jpeg`}
                    alt="randomized credit card background"
                  />
                </div>
  
                <div className="card-item__wrapper">
                  <div className="card-item__top">
                    <img
                      className="card-item__chip"
                      src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
                      alt="credit card security chip"
                    />
                    <div className="card-item__type">
                      <img
                        className="card-item__typeImg"
                        src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${getCardType}.pgn`}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */
  }

  return (
    <>
      <CreditCard />
      <Form />
    </>
  );
}

export default App;
