import { Link } from "react-router-dom";
import footerStyle from "../styles/footer.module.scss";


function Footer() {
    return (
        <div className={footerStyle.footerBox}>
            <Link to="https://rs.school/js/">
                <img className={footerStyle.logoRs} src='https://rs.school/images/rs_school_js.svg' alt='logoRs' ></img>
            </Link>
            <Link to="https://github.com/gordiancrew/">@Gordiancrew</Link>
            <Link to="https://github.com/AndreiPavlov135">@AndreiPavlov135</Link>
            <Link to="https://github.com/Syarguk">@Syarguk</Link>
        </div>
    )

}
export default Footer;