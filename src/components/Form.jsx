import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form as BootstrapForm, Button } from 'react-bootstrap';
import moment from 'moment';

import { updateText } from '../redux/actions/appActions';

export default function Form() {
  const dispatch = useDispatch();
  moment().format();
  const { number } = useSelector((state) => state.form);

  const handleChange = (type, e) => {
    dispatch(updateText({ type, value: e.target.value }));
  };

  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <div className="form">
      <BootstrapForm className="form__inner">
        <BootstrapForm.Group>
          <BootstrapForm.Label className="form__label">
            Card Number
          </BootstrapForm.Label>
          <BootstrapForm.Control
            onChange={(e) => handleChange('number', e)}
            className="form__input"
            type="text"
            value={number}
          />
        </BootstrapForm.Group>

        <BootstrapForm.Group>
          <BootstrapForm.Label className="form__label">
            Card Holder
          </BootstrapForm.Label>
          <BootstrapForm.Control className="form__input" type="text" />
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
                  value="month"
                  onChange={handleClick}
                >
                  <option value="month" disabled>
                    Month
                  </option>
                  <option value="1">1</option>
                  <option vale="2">2</option>
                  <option vale="3">3</option>
                </BootstrapForm.Control>

                <BootstrapForm.Control
                  className="form__input form__input--date"
                  as="select"
                  value="year"
                  onChange={handleClick}
                >
                  <option value="year" disabled>
                    Year
                  </option>
                  <option value="2020">{moment().year()}</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                </BootstrapForm.Control>
              </BootstrapForm.Group>
            </div>

            <div className="col-4 form__column">
              <BootstrapForm.Group>
                <BootstrapForm.Label className="form__label">
                  CVV
                </BootstrapForm.Label>
                <BootstrapForm.Control className="form__input" type="text" />
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
