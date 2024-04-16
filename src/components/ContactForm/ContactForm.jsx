import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { useId } from "react";
import { addContact } from "../../redux/contactsSlice";
import { initialValues } from "../../redux/constants";

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required*"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required*"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ContactSchema}>
      <Form className={css.form}>
        <label className={css.formLabel} htmlFor={nameId}>
          Name
        </label>
        <div className={css.formText}>
          <Field className={css.formInput} type="text" name="name" id={nameId} placeholder="Name" />
        </div>
        <ErrorMessage className={css.errorMsg} name="name" component="span" />

        <label className={css.formLabel} htmlFor={numberId}>
          Number
        </label>

        <div className={css.formText}>
          <Field
            className={css.formInput}
            type="text"
            name="number"
            id={numberId}
            placeholder="xxx-xx-xx"
          />
        </div>
        <ErrorMessage className={css.errorMsg} name="number" component="span" />

        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
