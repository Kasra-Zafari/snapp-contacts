import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./index.module.css";


const RecentContacts = () => {
    const [recentContacts, setRecentContacts] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const storedContacts = JSON.parse(localStorage.getItem("recentContacts")) || [];
        setRecentContacts(storedContacts);
    }, [])

    const handleNavigate = (id) => {
        navigate(`/contacts/${id}`);
    };

    const handleClearRecentContacts = () => {
        localStorage.removeItem("recentContacts");
        setRecentContacts([]);
    };

    return (
        <>
            <div className={classes.contacts}>
                <h2>Recently Viewed Contacts</h2>
                <div className={classes.container}>
                    <ul>
                        {recentContacts.map(contact => (
                            <li
                                onClick={() => handleNavigate(contact.id)}
                                key={contact.id}>
                                <img src={contact.image} alt="pic" />
                                <p>{contact.firstName} {contact.lastName}</p>
                                <p>{contact.phone}</p>
                            </li>
                        ))}
                    </ul>
                    {recentContacts.length > 0 && <button onClick={handleClearRecentContacts}>Clear Recent Contacts</button>}
                </div>
            </div>
        </>
    )
}

export default RecentContacts;