import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import CardFront from './CardFront';
import CardBack from './CardBack';
import Form from './Form';

function App() {
  const { isCVVFocused } = useSelector((state) => state.form);

  return (
    <>
      <div className="card__container d-flex justify-content-center">
        <div
          className={classNames(
            'card--flipper',
            isCVVFocused && 'card--flipping',
          )}
        >
          <CardFront />
          <CardBack />
        </div>
      </div>
      <Form />
    </>
  );
}

export default App;
