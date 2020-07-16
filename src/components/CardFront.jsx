import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

import {
  currentCardBackground,
  IMG_URL,
  slideUpVariants,
  slideLeftVariants,
} from '../utils/constants';
import { updateFocusInfo } from '../redux/actions/appActions';
import { generateLogoUrl, fadeInVariants } from '../utils/helpers';

export default function CardFront() {
  const dispatch = useDispatch();
  const { number, name, month, year, cardType, focus, focusInfo } = useSelector(
    (state) => state.card,
  );
  const {
    offsetHeight,
    offsetLeft,
    offsetTop,
    offsetWidth,
  } = document.getElementById(focus) || {
    offsetHeight: 0,
    offsetWidth: 0,
    offsetLeft: 0,
    offsetTop: 0,
  };

  useEffect(() => {
    dispatch(
      updateFocusInfo({
        height: offsetHeight + 10,
        width: offsetWidth + 30,
        left: offsetLeft - 15,
        top: offsetTop - 5,
      }),
    );
    // eslint-disable-next-line
  }, [focus]);

  const focusInput = () => {
    console.log(focusInfo.new);
    return (
      <motion.div
        className="card__focused"
        variants={focusInfo.old && fadeInVariants(focusInfo)}
        initial="hidden"
        animate="visible"
        key={focusInfo.new.width}
      />
    );
  };

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
      <motion.img
        src={generateLogoUrl(cardType)}
        alt="credit card logo"
        className="card__logo"
        variants={slideUpVariants}
        initial="hidden"
        animate="visible"
        key={generateLogoUrl(cardType)}
      />
      {focus && focusInput()}
      <div className="card__numbers" id="numbers">
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
      <div className="card__input-group card__input-group--name" id="name">
        <div className="card__input-title">Card Holder</div>
        <div className="card__input-response">
          {name.length === 0 ? (
            <motion.span
              className="card__word"
              variants={slideLeftVariants}
              initial="hidden"
              animate="visible"
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
      <div className="card__input-group card__input-group--date" id="date">
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
