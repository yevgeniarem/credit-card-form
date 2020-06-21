import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form as BootstrapForm, Button } from 'react-bootstrap';
import Cleave from 'cleave.js/react';

import {
  updateForm,
  toggleFocus,
  updateCard,
} from '../redux/actions/appActions';
import { months, years } from '../utils/constants';
import { determineNumbers, isCardTypeRecognized } from '../utils/helpers';

export default function Form() {
  const dispatch = useDispatch();
  const [
    { number, name, cvv, month, year },
    { cardType: creditCardType },
  ] = useSelector((state) => [state.form, state.card]);

  const handleChange = (type, e) => {
    dispatch(updateForm({ type, value: e.target.value }));
  };

  const onCreditCardTypeChanged = (cardType) => {
    dispatch(
      updateForm({
        type: 'cardType',
        value: isCardTypeRecognized(cardType) ? cardType : 'visa',
      }),
    );
  };

  return (
    <div className="form">
      <BootstrapForm className="form__inner">
        <BootstrapForm.Group>
          <BootstrapForm.Label className="form__label">
            Card Number
          </BootstrapForm.Label>
          <Cleave
            onChange={(e) => {
              dispatch(
                updateCard({
                  type: 'number',
                  value: determineNumbers(creditCardType, e.target.value),
                }),
              );
            }}
            className="form__input form-control"
            value={number}
            options={{
              creditCard: true,
              onCreditCardTypeChanged,
            }}
          />
        </BootstrapForm.Group>

        <BootstrapForm.Group>
          <BootstrapForm.Label className="form__label">
            Card Holder
          </BootstrapForm.Label>
          <BootstrapForm.Control
            onChange={(e) => handleChange('name', e)}
            className="form__input"
            type="text"
            value={name}
          />
        </BootstrapForm.Group>

        <div className="container">
          <div className="row">
            <div className="col-8 form__column">
              <BootstrapForm.Group>
                <BootstrapForm.Label className="form__label">
                  Expiration Date
                </BootstrapForm.Label>
                <BootstrapForm.Control
                  className="form__input form__input--date"
                  as="select"
                  value={month || 'month'}
                  onChange={(e) => handleChange('month', e)}
                >
                  <option value="month" disabled>
                    Month
                  </option>
                  {months.map((m) => (
                    <option value={m.value} key={m.id}>
                      {m.value}
                    </option>
                  ))}
                </BootstrapForm.Control>

                <BootstrapForm.Control
                  className="form__input form__input--date"
                  as="select"
                  value={year || 'year'}
                  onChange={(e) => handleChange('year', e)}
                >
                  <option value="year" disabled>
                    Year
                  </option>
                  {years.map((y) => (
                    <option value={y.value} key={y.id}>
                      {y.value}
                    </option>
                  ))}
                </BootstrapForm.Control>
              </BootstrapForm.Group>
            </div>

            <div className="col-4 form__column">
              <BootstrapForm.Group>
                <BootstrapForm.Label className="form__label">
                  CVV
                </BootstrapForm.Label>
                <BootstrapForm.Control
                  onChange={(e) => handleChange('cvv', e)}
                  onFocus={() => dispatch(toggleFocus(true))}
                  onBlur={() => dispatch(toggleFocus(false))}
                  className="form__input"
                  type="text"
                  value={cvv}
                />
              </BootstrapForm.Group>
            </div>
          </div>
        </div>

        <Button type="submit" className="form__submit-button">
          Submit
        </Button>
      </BootstrapForm>
    </div>
  );
}
