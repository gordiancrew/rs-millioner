import { Link } from "react-router-dom";
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import style from '../styles/signinup.module.scss';

export const SignInUp = () => {

    const [checkUserName, setCheckUserName] = useState(false);
    const [checkUserPassword, setCheckUserPassword] = useState(false);
    const [checkEnteGame, setCheckEnteGame] = useState(false);
    const [stateForm, setStateForm] = useState(true);

    function toggleForm() {
        setStateForm(!stateForm);
    }
    function changeCheckName() {
        setCheckUserName(!checkUserName);
    }
    function changeCheckPassword() {
        setCheckUserPassword(!checkUserPassword);
    }
    function enteredGame() {
        setCheckEnteGame(!checkEnteGame);
    }
    const [boolenReg, setBoolen] = useState(true);

    function changeForm() {
        setBoolen(!boolenReg)
    }
    const formikA = useFormik({
        initialValues: {
            name: '',
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                    .min(2, 'Минимум 2 символа!')
                    .required('Обязательное поле!'),
            password: Yup.string() 
                    .min(8, 'Минимум 8 символов!')
                    .required('Обязательное поле!'),
        }),
        onSubmit: values => {
            const user = localStorage.getItem(values.name);
            if (user) {
                const userData = JSON.parse(user);
                if (userData.password !== values.password) {
                    changeCheckPassword();
                } else {
                    enteredGame();
                }
            } else {
                changeCheckName();
            }
        }
    })
    const formikR = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                    .min(2, 'Минимум 2 символа!')
                    .required('Обязательное поле!'),
            email: Yup.string() 
                    .email('Неправильный email адрес!')
                    .required('Обязательное поле!'),
            password: Yup.string() 
                    .min(8, 'Минимум 8 символов!')
                    .required('Обязательное поле!'),
        }),
        onSubmit: values => {
            localStorage.setItem(values.name, JSON.stringify(values));
            changeForm();
        }
    })
    return (
        <>
        {stateForm ?
        <form className={style.signinupform} onSubmit={formikA.handleSubmit}>
            {!checkEnteGame ? 
                <>
                    <h2>Авторизация</h2>
                    <label htmlFor="name">Ваше имя</label>
                    <input
                        name='name'
                        type="text"
                        value={formikA.values.name}
                        onChange={formikA.handleChange}
                        onBlur={formikA.handleBlur}
                    />
                    {formikA.errors.name && formikA.touched.name ? <div className={style.error}>{formikA.errors.name}</div> : null}
                    {checkUserName ? <div className={style.error}>Не правильный логин</div> : null}
                    <label htmlFor="email">Пароль</label>
                    <input
                        name='password'
                        type="password"
                        value={formikA.values.password}
                        onChange={formikA.handleChange}
                        onBlur={formikA.handleBlur}
                    />
                    {formikA.errors.password && formikA.touched.password ? <div className={style.error}>{formikA.errors.password}</div> : null}
                    {checkUserPassword ? <div className={style.error}>Не правильный пароль</div> : null}
                    <button type="submit">Отправить</button>
                    <h3><span className={style.link} onClick={toggleForm}>Зарегистрироваться</span></h3>
                    <h3><Link to="/question"><span className={style.link} >Играть без регистрации</span></Link></h3>
                </>
            : <h2>Вы авторизовались</h2>}
        </form>
        :  <form className={style.signinupform} onSubmit={formikR.handleSubmit}>
        {boolenReg ? 
            <>
                <h2>Регистрация</h2>
                <label htmlFor="name">Ваше имя</label>
                <input
                    name='name'
                    type="text"
                    value={formikR.values.name}
                    onChange={formikR.handleChange}
                    onBlur={formikR.handleBlur}
                />
                {formikR.errors.name && formikR.touched.name ? <div className={style.error}>{formikR.errors.name}</div> : null}
                <label htmlFor="email">Ваша почта</label>
                <input
                    name='email'
                    type="email"
                    value={formikR.values.email}
                    onChange={formikR.handleChange}
                    onBlur={formikR.handleBlur}
                />
                {formikR.errors.email && formikR.touched.email ? <div className={style.error}>{formikR.errors.email}</div> : null}
                <label htmlFor="email">Пароль</label>
                <input
                    name='password'
                    type="password"
                    value={formikR.values.password}
                    onChange={formikR.handleChange}
                    onBlur={formikR.handleBlur}
                />
                {formikR.errors.password && formikR.touched.password ? <div className={style.error}>{formikR.errors.password}</div> : null}
                <button type="submit">Отправить</button>
            </>
         : <>
                <h2>Вы зарегистрированы</h2>
                <h3><Link to="/question"><span className={style.link}>Начать игру</span></Link></h3>
            </>}
    </form>
    }
    </>
    )
}
