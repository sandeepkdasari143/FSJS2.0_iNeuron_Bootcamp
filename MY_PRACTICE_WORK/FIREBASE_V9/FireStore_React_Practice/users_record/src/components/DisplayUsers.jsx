import { collection, onSnapshot} from "firebase/firestore"
import { useEffect, useState } from "react";
import { db } from "../config/firebase"

export default function DisplayUsers() {

    const [users, setUsers] = useState([]);

    //todo: have a reference to the firestore users collection.
    const usersColRef = collection(db, "users");

    useEffect(() => {
        onSnapshot(usersColRef, (snapshot) => {
            setUsers(snapshot.docs.map((doc) => {
                return {...doc.data(), id: doc.id}
            }))
        })
    })
    
    return (
        <div className="text-white font-bold">
            {users.map((user) => { 
                return (
                    <h1 key={user.id}>{user.email}</h1>
                )
            })}
        </div>
    )


    
}
