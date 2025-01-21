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


    // const mapUrl = contact.address.coordinates.lat && contact.address.coordinates.lng 
    //     ? `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${contact.address.coordinates.lat},${contact.address.coordinates.lng}` 
    //     : null;

    // console.log(contact.address.coordinates.lng);
    

    return (
        <div>
            <img src={contact.image} alt="" />
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