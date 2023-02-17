import { SignInUp } from "./signInUp";
import "../styles/home.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface IHome {
  t: Function;
  changeAutoris: Function;
  changeLng: Function;
}

function Home({ t, changeAutoris, changeLng }: IHome) {
 
  return (
    <div className="page">
      <SignInUp t={t} changeAutoris={changeAutoris} changeLng={changeLng} />
    </div>
  );

}
export default Home;
