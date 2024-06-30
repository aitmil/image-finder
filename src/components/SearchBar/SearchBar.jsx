import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { MdSearch } from "react-icons/md";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const notify = () => toast("The search field is empty. Please try again!");
  const handleSubmit = (values, actions) => {
    values.search === "" ? notify() : onSubmit(values.search);
    actions.resetForm();
  };
  return (
    <header className={css.header}>
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <button type="submit" className={css.btn}>
            <MdSearch size={24} />
          </button>
          <Field
            className={css.input}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
          />
        </Form>
      </Formik>
      <Toaster
        toastOptions={{
          style: {
            padding: "16px",
            color: "red",
            marginTop: "60px",
            textAlign: "center",
          },
        }}
      />
    </header>
  );
}
