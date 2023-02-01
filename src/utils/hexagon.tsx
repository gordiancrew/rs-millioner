import style from '../styles/home.module.scss';

interface Title {
    title: string
}
function Hexagon({title}: Title) {
    return (
        <div className={style.wraphexagon}>
            <p className={style.hexatext}>{title}</p>
        </div>
    )
}

export default Hexagon;