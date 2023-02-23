import React from "react";
import st from "../styles/rules.module.scss";

export default function Rules({ t }: { t: Function }) {
  return (
    <div className={st.rules}>
      <div className={st.logoWrapper}>
        <div className={st.logo}></div>
      </div>
      <h1>{t("rules.header")}</h1>
      <p>{t("rules.description")}</p>
      <p>{t("rules.authorization")}</p>
      <p>{t("rules.languages")}</p>
      <p>{t("rules.core")}</p>
      <p>{t("rules.hints.description")}</p>
      <p>{t("rules.hints.hintFiftyFifty")}</p>
      <p>{t("rules.hints.hintCall")}</p>
      <p>{t("rules.hints.hintBoolean")}</p>
      <p>{t("rules.conclusion")}</p>
    </div>
  );
}
