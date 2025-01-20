import { Link } from "react-router-dom";


const Header = () => {

    return (
        <>
            <header>
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