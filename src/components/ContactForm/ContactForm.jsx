import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useId } from "react";
import { initialValues } from "../../redux/constants";
import { addContact } from "../../redux/contactsOps";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required*"),
  number: Yup.string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, "Invalid phone number format")
    .min(8, "Too Short!")
    .max(15, "Too Long!")
    .required("Required*"),
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
            placeholder="xxx-xxx-xxxx"
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
