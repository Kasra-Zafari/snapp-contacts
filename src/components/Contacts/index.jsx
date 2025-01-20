import { useState, useEffect } from "react";
import SearchBar from "../SearchBar";


const Contacts = () => {

    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");


    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;


        fetch("https://randomuser.me/api/?results=50", signal)
            .then(res => res.json())
            .then(data => {
                setContacts(data.results)
            })
            .catch((error) => {
                alert("an error has been occured");
                setLoading(false);
            })
            .finally(() => { setLoading(false) })

        return () => { controller.abort() }

    }, [])

    if (loading) {
        return <h3>Loading...</h3>
    }

    return (
        <>
            <div>
                <h1>Contacts</h1>
                <SearchBar />
                <div>
                    <ul>
                        {contacts.map(contact => (
                            <li key={contact.login.uuid}>
                                <img src={contact.picture.thumbnail} alt="pic" />
                                <p>{contact.name.first} {contact.name.last}</p>
                                <p>{contact.cell}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Contacts;