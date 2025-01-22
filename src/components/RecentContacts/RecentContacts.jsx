import { useEffect, useState } from "react";


const RecentContacts = () => {
    const [recentContacts, setRecentContacts] = useState([])

    useEffect(() => {
        const storedContacts = JSON.parse(localStorage.getItem("recentContacts")) || [];
        setRecentContacts(storedContacts);
    }, [])

    return (
        <>
            <div>
                <h2>Recently Viewed Contacts</h2>
                <ul>
                    <li>item1</li>
                    <li>item2</li>
                    <li>item3</li>
                    <li>item4</li>
                </ul>
            </div>
        </>
    )
}

export default RecentContacts;