import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form as BootstrapForm, Button } from 'react-bootstrap';
import Cleave from 'cleave.js/react';
import moment from 'moment';

import {
  updateForm,
  toggleFocus,
  updateCard,
  updateCVV,
} from '../redux/actions/appActions';
import { months, years } from '../utils/constants';
import {
  determineNumbers,
  isCardTypeRecognized,
  determineCardNumAnimations,
  determineMonth,
} from '../utils/helpers';

export default function Form() {
  const dispatch = useDispatch();
  const [
    { name, cvv, month, year },
    { cardType: creditCardType, number },
  ] = useSelector((state) => [state.form, state.card]);
  moment().format();

  const handleChange = (type, e) => {
    if (type === 'year' && month < moment().month())
      dispatch(updateForm({ type: 'month', value: 'MM' }));
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

  useEffect(() => {
    dispatch(
      updateCard({
        type: 'number',
        value: determineNumbers(creditCardType, number),
      }),
    );
    // eslint-disable-next-line
  }, [creditCardType]);

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
                  type: 'numberAnimations',
                  value: determineCardNumAnimations(
                    number,
                    determineNumbers(creditCardType, e.target.value),
                  ),
                }),
              );
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
          <div className="row ">
            <div className="col-6 col-md form__column form__column--left justify-content-start">
              <BootstrapForm.Label className="form__label">
                Expiration Date
              </BootstrapForm.Label>
              <BootstrapForm.Control
                className="form__input form__input--date"
                as="select"
                value={determineMonth(month, year)}
                onChange={(e) => handleChange('month', e)}
              >
                <option value="month" disabled>
                  Month
                </option>
                {months.map((m, idx) => (
                  <option
                    value={m.value}
                    key={m.id}
                    disabled={
                      Number(year) === moment().year() && idx < moment().month()
                    }
                  >
                    {m.value}
                  </option>
                ))}
              </BootstrapForm.Control>
            </div>

            <div className="col-6 col-md form__column form__column--right justify-content-end">
              <BootstrapForm.Control
                className="form__input form__input--date form__input--year"
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
            </div>

            <div className="col-12 col-md form__column">
              <BootstrapForm.Group>
                <BootstrapForm.Label className="form__label form--cvv">
                  CVV
                </BootstrapForm.Label>
                <BootstrapForm.Control
                  onChange={(e) =>
                    dispatch(updateCVV({ type: 'cvv', value: e.target.value }))
                  }
                  onFocus={() => dispatch(toggleFocus(true))}
                  onBlur={() => dispatch(toggleFocus(false))}
                  className="form__input"
                  type="text"
                  maxLength="4"
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
