import { FC } from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { MdSearch } from 'react-icons/md';
import { SearchBarProps } from './SearchBarProps';
import css from './SearchBar.module.css';

export const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const notify = (): string =>
    toast('The search field is empty. Please try again!');
  const handleSubmit = async (
    values: { search: string },
    actions: FormikHelpers<{ search: string }>
  ) => {
    if (values.search === '') {
      notify();
    } else {
      try {
        await onSubmit(values.search);
      } catch {
        toast.error('Submitting search error! Please try again');
      }
    }
    actions.resetForm();
  };
  return (
    <header className={css.header}>
      <Formik
        initialValues={{ search: '' }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <button
            type='submit'
            className={css.btn}
          >
            <MdSearch size={24} />
          </button>
          <Field
            className={css.input}
            autoComplete='off'
            autoFocus
            placeholder='Search images and photos'
            name='search'
          />
        </Form>
      </Formik>
      <Toaster
        toastOptions={{
          style: {
            padding: '16px',
            color: 'red',
            marginTop: '60px',
            textAlign: 'center',
          },
        }}
      />
    </header>
  );
};
