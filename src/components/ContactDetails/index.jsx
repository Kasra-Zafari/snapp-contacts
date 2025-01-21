import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ContactDetails = () => {
    const params = useParams();
    const [contact, setContact] = useState(null);


    useEffect(() => {
        if (params.id) {
            fetch(`https://dummyjson.com/users/${params.id}`)
                .then(res => res.json())
                .then(data => {
                    setContact(data);
                })
        }
    }, [params.id]);

    if (!contact) {
        return <h3>Loading...</h3>;
    };

    return (
        <div>
            <img src={contact.image} alt="" />
            <h2>{contact.firstName} {contact.lastName}</h2>
            <p><strong>Phone:</strong> {contact.phone}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>City:</strong> {contact.address.city}</p>
            <p><strong>Address:</strong> {contact.address.address}</p>
        </div>

    )
}

export default ContactDetails;