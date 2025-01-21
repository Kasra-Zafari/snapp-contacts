import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

const ContactDetails = () => {
    const params = useParams();
    const [contact, setContact] = useState(null);
    console.log(contact);
    

    useEffect(() => {
        if(params.id){
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
        <p>{contact.firstName}</p>
    )
}

export default ContactDetails;