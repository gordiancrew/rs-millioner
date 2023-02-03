import { useFormik } from 'formik';
import * as Yup from 'yup';
import style from '../styles/signup.module.scss';

/* interface Err {
    name?: string;
    email?: string;
}
const validate = (values: Err) => {
    const errors: Err = {};

    if (!values.name) {
        errors.name = 'Обязательное поле!';
    } else if (values.name.length < 2) {
        errors.name = 'Минимум 2 символа';
    }

    if (!values.email) {
        errors.email = 'Обязательное поле!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Неправильный email адрес';
    }

    return errors;
} */

const SignUp = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                    .min(2, 'Минимум 2 символа!')
                    .required('Обязательное поле!'),
            email: Yup.string()
                    .email('Неправильный email адрес!')
                    .required('Обязательное поле!'),
        }),
        onSubmit: values => console.log(JSON.stringify(values, null, 2))
    })

    return (
        <form className={style.signupform} onSubmit={formik.handleSubmit}>
            <h2>Регистрация</h2>
            <label htmlFor="name">Ваше имя</label>
            <input
                name='name'
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ? <div className={style.error}>{formik.errors.name}</div> : null}
            <label htmlFor="email">Ваша почта</label>
            <input
                name='email'
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? <div className={style.error}>{formik.errors.email}</div> : null}
            <button type="submit">Отправить</button>
        </form>
    )
}

export default SignUp;