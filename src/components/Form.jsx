import React from 'react';
import moment from 'moment';
import { Form as BootstrapForm, Button } from 'react-bootstrap';

export default function Form() {
  moment().format();

  return (
    <div className="form">
      <BootstrapForm className="form__inner">
        <BootstrapForm.Group>
          <BootstrapForm.Label className="form__label">
            Card Number
          </BootstrapForm.Label>
          <BootstrapForm.Control className="form__input" type="text" />
        </BootstrapForm.Group>

        <BootstrapForm.Group>
          <BootstrapForm.Label className="form__label">
            Card Holders
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
