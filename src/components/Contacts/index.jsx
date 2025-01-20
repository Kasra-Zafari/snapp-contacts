import { useState } from "react";
import { useEffect } from "react";
import { data } from "react-router-dom";


const Contacts = () => {

    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch("https://randomuser.me/api/?results=50")
            .then(res => res.json())
            .then(data => {
                setContacts(data.results)
            })
            .catch((error) => { alert("an error has been occured") })
            .finally(()=>{setLoading(false)})

    }, [])

    if (loading) {
        return <h3>Loading...</h3>
    }

    return (
        <>
            <div>
                <h1>Contacts</h1>
                <div>
                    <ul>
                        {contacts.map(contact => (
                            <li key={contact.login.uuid}>
                                <img src={contact.picture.thumbnail} alt="pic" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Contacts;