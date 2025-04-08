import s from './ContactForm.module.css';
import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
    fullName: Yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
    phone: Yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
});

function ContactForm({ onSubmitContact }) {
    const nameId = useId();
    const numberId = useId();

    function handleFormSubmit(values, actions) {
        const newContact = {...values, id: nanoid(10)}
        onSubmitContact(newContact);
        actions.resetForm();
    };
    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            validationSchema={ValidationSchema}
            onSubmit={handleFormSubmit}
        >
            {({ errors, touched }) => (
                <Form className={s.formBlock}>
                    <div className={s.inputWrapper}>
                        <label htmlFor={nameId}>Name</label>
                        <Field name="name" id={nameId} />
                        <p className={s.errorText}>
                            {touched.name && errors.name}
                        </p>
                    </div>
                    <div className={s.inputWrapper}>
                        <label htmlFor={numberId}>Phone</label>
                        <Field name="number" id={numberId} />
                        <p className={s.errorText}>
                            {touched.number && errors.number}
                        </p>
                    </div>
                    <button type='submit' className={s.submitBtn}>Save contact</button>
                </Form>
            )}
        </Formik>
    );
}

export default ContactForm;