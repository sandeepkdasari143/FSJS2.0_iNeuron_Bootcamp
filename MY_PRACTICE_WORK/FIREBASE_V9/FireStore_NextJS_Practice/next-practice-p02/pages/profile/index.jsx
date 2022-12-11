import { db } from "../../firebase";
import {collection, getDocs, getDoc, doc} from "firebase/firestore"
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";

const Profile = ({ data }) => {
    const router = useRouter();
    const { query: { uid } } = router;  //TODO: Data came from the Login Page ('/')...
    const props = {
        value: uid
    }
    
    // console.log(data?.id);  //todo: testing purpose

    // console.log(data);
    
    return (
        <div>
            {props.value}

            <br />
            <button className="" onClick={() => {
                router.replace('/');
            }}>Log Out</button>
        </div>
        
    )
}

export default Profile;


export async function getStaticProps() {

    const usersRef = collection(db, 'users');
    
    let users = await getDocs(usersRef).then((snapshot) => {
        let tempUsers = [];
        snapshot.docs.map(doc => {
            tempUsers.push({ ...doc.data(), id: doc.id })
        })
        return tempUsers;
    })

    // console.log(users); //todo : testing purpose
    
    return {
            props: {
                data: users
            }
        }
}