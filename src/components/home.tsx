import { SignInUp } from "./signInUp";
import "../styles/home.scss";

function Home({t, changeAutoris}: {t: Function, changeAutoris: Function}) {
  return (
    <div className="page">
      <SignInUp t={t} changeAutoris={changeAutoris}/>
    </div>
  );
}
export default Home;
