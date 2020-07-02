import React from 'react';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

import { currentCardBackground, IMG_URL } from '../utils/constants';
import { generateLogoUrl } from '../utils/helpers';

const numberVariants = {
  hidden: {
    opacity: 0,
    y: 15,
    transition: {
      duration: 0.3,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  up: {
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.3,
    },
  },
};

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
      <div className="card__numbers">
        <AnimatePresence>
          {number.split('').map((n, idx) => {
            return (
              <span
                className="card__number-container"
                // eslint-disable-next-line react/no-array-index-key
                key={`${n}${idx}`}
              >
                <motion.span
                  variants={numberVariants}
                  initial="hidden"
                  animate="visible"
                  exit="up"
                  className="card__number"
                >
                  {n}
                </motion.span>
              </span>
            );
          })}
        </AnimatePresence>
      </div>
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
