import React from 'react';
import { useSelector } from 'react-redux';

import CardFront from './CardFront';
import CardBack from './CardBack';
import Form from './Form';

function App() {
  const { isCVVFocused } = useSelector((state) => state.form);

  return (
    <>
      {isCVVFocused ? <CardBack /> : <CardFront />}
      <Form />
    </>
  );
}

export default App;
