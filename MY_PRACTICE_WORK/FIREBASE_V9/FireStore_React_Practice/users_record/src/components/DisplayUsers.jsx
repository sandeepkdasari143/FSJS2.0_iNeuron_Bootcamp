import React, { useEffect } from 'react'
import { db } from '../config/firebase';
import { getDocs, collection} from 'firebase/firestore';
export default function DisplayUsers() {

    const usersColRef = collection(db, 'users');
    let users = [];
    useEffect((users) => {
        getDocs(usersColRef).then((snapshot) => {
        snapshot.docs.map((doc) => {
            return users.push({ ...doc.data(), id: doc.id });
        })
    })
    }, [usersColRef])
    
    return (
        <div>
            {users.map(user => {
                return <p>{user?.email}</p>
            })}
            <button className='bg-white text-black px-5 py-3 rounded-lg '>click me for data</button>
        </div>
    )
}
