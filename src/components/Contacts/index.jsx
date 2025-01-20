import { useState } from "react";
import { useEffect } from "react";


const Contacts = () => {

    const[contacts, setContacts]=useState([]);
    console.log(contacts);
    

useEffect(()=>{
    fetch("https://randomuser.me/api/?results=50")
    .then(res=>res.json())
    .then(date=>{
        setContacts(date)
    })
},[])

    return (
        <>
        <div>
        <h1>Contacts</h1>
        <div>
            <ul>
                <li>
                    item1
                </li>
                <li>
                    item2
                </li>
            </ul>
        </div>
        </div>
        </>
    )
}

export default Contacts;