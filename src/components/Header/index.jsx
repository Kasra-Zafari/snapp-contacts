import { Link } from "react-router-dom";


const Header = () => {

    return (
        <>
            <header>
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/Contact">
                    <button>Contact Details</button>
                </Link>
            </header>
        </>
    )
}

export default Header;