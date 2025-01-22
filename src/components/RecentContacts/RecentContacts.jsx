import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


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

    return (
        <>
            <div>
                <h2>Recently Viewed Contacts</h2>
                <ul>
                    {recentContacts.map(contact=>(
                        <li
                        onClick={() => handleNavigate(contact.id)}
                        key={contact.id}>
                        <img src={contact.image} alt="pic" />
                        <p>{contact.firstName} {contact.lastName}</p>
                        <p>{contact.phone}</p>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default RecentContacts;