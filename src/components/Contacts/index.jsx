import { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import { Link, useNavigate } from "react-router-dom";


const Contacts = () => {

    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const navigate = useNavigate()



    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;


        fetch("https://dummyjson.com/users", signal)
            .then(res => res.json())
            .then(data => {
                setContacts(data.users)
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

    const filteredContacts = contacts.filter(contact => {
        const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
        const phone = contact.phone.toLowerCase();
        const searchType = search.toLowerCase();
        return fullName.includes(searchType) || phone.includes(searchType)
    });


    const handleNavigate = (id) => {
        navigate(`/contacts/${id}`);
    };

    return (
        <>
            <div>
                <h1>Contacts</h1>
                <SearchBar search={search} setSearch={setSearch} />
                <div>
                    <ul>
                        {filteredContacts.length > 0 ? (
                            filteredContacts.map(contact => (
                                <li
                                    onClick={() => handleNavigate(contact.id)}
                                    key={contact.id}>
                                    <img src={contact.image} alt="pic" />
                                    <p>{contact.firstName} {contact.lastName}</p>
                                    <p>{contact.phone}</p>
                                    {/* <button onClick={() => handleNavigate(contact.id)}>
                                        View Details
                                    </button> */}
                                </li>
                            ))
                        ) : (<p>No contacts found</p>)}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Contacts;