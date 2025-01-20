import { useState } from "react";
import { useEffect } from "react";
import { data } from "react-router-dom";


const Contacts = () => {

    const [contacts, setContacts] = useState([]);


    useEffect(() => {
        fetch("https://randomuser.me/api/?results=50")
            .then(res => res.json())
            .then(data => {
                setContacts(data.results)
            })
    }, [])

    return (
        <>
            <div>
                <h1>Contacts</h1>
                <div>
                    <ul>
                        {contacts.map(contact => (
                            <li>
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