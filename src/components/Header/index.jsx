import { Link } from "react-router-dom";
import classes from "./index.module.css";


const Header = () => {

    return (
        <>
            <header className={classes.header}>
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/contacts">
                    <button>Contact</button>
                </Link>
            </header>
        </>
    )
}

export default Header;