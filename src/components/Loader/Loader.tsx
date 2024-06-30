import { FC } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader: FC = () => {
  return (
    <>
      <ThreeDots
        visible={true}
        height='100'
        width='100'
        color='#7a1f50'
        radius='9'
        ariaLabel='three-dots-loading'
        wrapperClass={css.loader}
      />
    </>
  );
};
