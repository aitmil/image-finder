import { FC } from 'react';
import css from './ErrorMessage.module.css';

export const ErrorMessage: FC = () => {
  return <p className={css.text}>HTTP request error. Please try again!</p>;
};
