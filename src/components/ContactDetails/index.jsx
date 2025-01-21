import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

const ContactDetails = () => {
    const params = useParams();
    const [contact, setContact] = useState(null);
    console.log(contact);
    

    useEffect(() => {
        if(params.id){
            fetch(`https://randomuser.me/api/?results=1&seed=${params.id}`)
            .then(res => res.json())
            .then(data => {
                setContact(data.results[0])
            })
        }
    }, [params.id])

    return (
        <p>{contact.name.first}</p>
    )
}

export default ContactDetails;