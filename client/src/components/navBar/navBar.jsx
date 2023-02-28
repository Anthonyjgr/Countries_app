import { Link } from "react-router-dom"
import style from "./navBar.module.css"

const NavBar = () => {
    return (
        <div className={style.container}>
            <Link className={style.links} to="/home">HOME</Link>
            <Link className={style.links} to="/addactivity">ADD ACTIVITY</Link>
            <Link className={style.links} to="/about">ABOUT</Link>
        </div>
    )
};

export default NavBar;