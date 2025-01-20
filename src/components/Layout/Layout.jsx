import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = ({ Children }) => {
    return (
        <>
            <Header />
            {Children}
            <Footer/>
        </>
    )
}
export default Layout;