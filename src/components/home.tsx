import { SignInUp } from "./signInUp";
import "../styles/home.scss";

interface IHome {
  t: Function;
  changeLng: Function;
  onoffvoice: Function;
}

function Home({ t, changeLng, onoffvoice }: IHome) {
 
  return (
    <div className="page">
      <SignInUp t={t} changeLng={changeLng} onoffvoice={onoffvoice} />
    </div>
  );

}
export default Home;
