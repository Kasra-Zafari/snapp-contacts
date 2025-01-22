import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./index.module.css";

const ContactDetails = () => {
    const params = useParams();
    const [contact, setContact] = useState(null);


    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        if (params.id) {
            fetch(`https://dummyjson.com/users/${params.id}`, { signal })
                .then(res => res.json())
                .then(data => {
                    setContact(data);
                })
                .catch((error) => {
                    alert("an error has been occured");
                })

            return () => {
                controller.abort();
            };
        }
    }, [params.id]);

    if (!contact) {
        return (
            <div className={classes.loading}>
                <div className={classes['loading-spinner']}></div>
                <p>Loading...</p>
            </div>
        );
    }


   

    return (
        <div className={classes.contactDetails}>
            <img src={contact.image} alt={`${contact.firstName} ${contact.lastName}`} />
            <h2>{contact.firstName} {contact.lastName}</h2>
            <p><strong>Phone:</strong> {contact.phone}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>City:</strong> {contact.address.city}</p>
            <p><strong>Address:</strong> {contact.address.address}</p>
            {/* <div>
                <h3>Location:</h3>
                <iframe
                        width="100%"
                        height="400"
                        src={mapUrl}
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen
                    ></iframe>
            </div> */}

        </div>

    )
}

export default ContactDetails;