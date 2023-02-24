import { Link } from "react-router-dom";
import footerStyle from "../styles/footer.module.scss";


function Footer() {
    return (
        <div className={footerStyle.footerBox}>
            <Link to="https://rs.school/js/">
                <img className={footerStyle.logoRs} src='https://rs.school/images/rs_school_js.svg' alt='logoRs' ></img>
            </Link>
            <Link className={footerStyle.gitHub} to="https://github.com/gordiancrew/">
                <img className={footerStyle.logoGH} src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='logoRs' ></img>
                Gordiancrew
            </Link>
            <Link className={footerStyle.gitHub} to="https://github.com/AndreiPavlov135">
            <img className={footerStyle.logoGH} src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='logoRs' ></img>
                AndreiPavlov135</Link>
            <Link className={footerStyle.gitHub} to="https://github.com/Syarguk">
            <img className={footerStyle.logoGH} src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='logoRs' ></img>
                Syarguk</Link>
        </div>
    )

}
export default Footer;