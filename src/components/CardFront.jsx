import React from 'react';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

import {
  currentCardBackground,
  IMG_URL,
  slideUpVariants,
  slideLeftVariants,
} from '../utils/constants';
import { generateLogoUrl } from '../utils/helpers';

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
        {number.split('').map((n, idx) => {
          return (
            <motion.span
              variants={slideUpVariants}
              initial="hidden"
              animate="visible"
              className="card__number"
              // eslint-disable-next-line react/no-array-index-key
              key={`${n}${idx}`}
            >
              {n}
            </motion.span>
          );
        })}
      </div>
      <div className="card__input-group card__input-group--name">
        <div className="card__input-title">Card Holder</div>
        <div className="card__input-response">
          {name.length === 0 ? (
            <motion.span
              variants={slideLeftVariants}
              initial="hidden"
              animate="visible"
              className="card__word"
            >
              FULL NAME
            </motion.span>
          ) : (
            <AnimatePresence>
              {name.split('').map((l, idx) => {
                return (
                  <motion.span
                    variants={slideLeftVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="card__letter"
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${l}${idx}`}
                  >
                    {l}
                  </motion.span>
                );
              })}
            </AnimatePresence>
          )}
        </div>
      </div>
      <div className="card__input-group card__input-group--date">
        <div className="card__input-title">Expires</div>
        <div className="card__input-response">
          <motion.span
            variants={slideUpVariants}
            initial="hidden"
            animate="visible"
            className="card__word"
            key={month}
          >
            {month}
          </motion.span>
          /
          <motion.span
            variants={slideUpVariants}
            initial="hidden"
            animate="visible"
            className="card__word"
            key={year}
          >
            {year.toString().substr(-2)}
          </motion.span>
        </div>
      </div>
    </div>
  );
}
