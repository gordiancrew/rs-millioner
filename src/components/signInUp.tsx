import { Link } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import style from "../styles/signinup.module.scss";
import st from "../styles/start.module.scss";

export const SignInUp = (props: { t: Function; changeAutoris: Function }) => {
  const [checkUserName, setCheckUserName] = useState(false);
  const [checkUserPassword, setCheckUserPassword] = useState(false);
  const [stateForm, setStateForm] = useState(true);
  const [doubleName, setDoubleName] = useState(false);
  const { t } = props;
  const navigate = useNavigate();

  function toggleForm() {
    setStateForm(!stateForm);
  }
  function changeCheckName() {
    setCheckUserName(!checkUserName);
  }
  function changeCheckPassword() {
    setCheckUserPassword(!checkUserPassword);
  }
  function checkDoubleName() {
    setDoubleName(!doubleName);
  }
  function enterMenu() {
    navigate("/home");
  }
  const formikA = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, t("signinup.min2Sumb"))
        .required(t("signinup.requiredField")),
      password: Yup.string()
        .min(8, t("signinup.min8Sumb"))
        .required(t("signinup.requiredField")),
    }),
    onSubmit: (values) => {
      const user = localStorage.getItem(values.name);
      if (user) {
        const userData = JSON.parse(user);
        if (userData.password !== values.password) {
          changeCheckPassword();
        } else {
          enterMenu();
          props.changeAutoris();
        }
      } else {
        changeCheckName();
      }
    },
  });
  const formikR = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, t("signinup.min2Sumb"))
        .required(t("signinup.requiredField")),
      email: Yup.string()
        .email(t("signinup.emailError"))
        .required(t("signinup.requiredField")),
      password: Yup.string()
        .min(8, t("signinup.min8Sumb"))
        .required(t("signinup.requiredField")),
    }),
    onSubmit: (values) => {
      const keysUser = Object.keys(localStorage).map((name) =>
        name.toLowerCase()
      );
      const newUserName = values.name.toLowerCase();
      if (keysUser.includes(newUserName)) {
        checkDoubleName();
      } else {
        localStorage.setItem(values.name, JSON.stringify(values));
        enterMenu();
        props.changeAutoris();
      }
    },
  });
  return (
    <>
      {stateForm ? (
        <form className={style.signinupform} onSubmit={formikA.handleSubmit}>
          <h2>{t("signinup.autoris")}</h2>
          <div className={st.input_wrapper}>
            <input
              placeholder={t("signinup.nickname")}
              name="name"
              type="text"
              value={formikA.values.name}
              onChange={formikA.handleChange}
              onBlur={formikA.handleBlur}
            />
          </div>

          {formikA.errors.name && formikA.touched.name ? (
            <div className={style.error} style={{ top: "40vh" }}>
              {formikA.errors.name}
            </div>
          ) : null}
          {checkUserName ? (
            <div className={style.error} style={{ top: "40vh" }}>
              {t("signinup.loginError")}
            </div>
          ) : null}
          <div className={st.input_wrapper}>
            <input
              placeholder={t("signinup.password")}
              name="password"
              type="password"
              value={formikA.values.password}
              onChange={formikA.handleChange}
              onBlur={formikA.handleBlur}
            />
          </div>

          {formikA.errors.password && formikA.touched.password ? (
            <div className={style.error} style={{ top: "50vh" }}>
              {formikA.errors.password}
            </div>
          ) : null}
          {checkUserPassword ? (
            <div className={style.error} style={{ top: "50vh" }}>
              {t("signinup.passwordError")}
            </div>
          ) : null}
          <div className={st.input_wrapper}>
            <button type="submit">{t("signinup.send")}</button>
          </div>
          <h3>
            <span className={style.link} onClick={toggleForm}>
              {t("signinup.willregistr")}
            </span>
          </h3>
          <h3>
            <Link to="/home">
              <span className={style.link}>{t("signinup.notregistr")}</span>
            </Link>
          </h3>
        </form>
      ) : (
        <form className={style.signinupform} onSubmit={formikR.handleSubmit}>
          <h2>{t("signinup.registr")}</h2>
          <label htmlFor="name">{t("signinup.nickname")}</label>
          <div className={st.input_wrapper}>
            <input
              name="name"
              type="text"
              value={formikR.values.name}
              onChange={formikR.handleChange}
              onBlur={formikR.handleBlur}
            />
          </div>

          {formikR.errors.name && formikR.touched.name ? (
            <div className={style.error} style={{ top: "43vh" }}>
              {formikR.errors.name}
            </div>
          ) : null}
          {doubleName ? (
            <div className={style.error} style={{ top: "43vh" }}>
              {t("signinup.doubleName")}
            </div>
          ) : null}
          <label htmlFor="email">{t("signinup.email")}</label>
          <div className={st.input_wrapper}>
            <input
              name="email"
              type="email"
              value={formikR.values.email}
              onChange={formikR.handleChange}
              onBlur={formikR.handleBlur}
            />
          </div>

          {formikR.errors.email && formikR.touched.email ? (
            <div className={style.error} style={{ top: "56vh" }}>
              {formikR.errors.email}
            </div>
          ) : null}
          <label htmlFor="email">{t("signinup.password")}</label>
          <div className={st.input_wrapper}>
            <input
              name="password"
              type="password"
              value={formikR.values.password}
              onChange={formikR.handleChange}
              onBlur={formikR.handleBlur}
            />
          </div>

          {formikR.errors.password && formikR.touched.password ? (
            <div className={style.error} style={{ top: "68vh" }}>
              {formikR.errors.password}
            </div>
          ) : null}
          <div className={st.input_wrapper}>
            <button type="submit">{t("signinup.send")}</button>
          </div>
        </form>
      )}
    </>
  );
};
