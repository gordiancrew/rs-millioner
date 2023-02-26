import { SignInUp } from "./signInUp";
import "../styles/home.scss";

interface IHome {
  t: Function;
  changeLng: Function;
}

function Home({ t, changeLng }: IHome) {
 
  return (
    <div className="page">
      <SignInUp t={t} changeLng={changeLng} />
    </div>
  );

}
export default Home;
