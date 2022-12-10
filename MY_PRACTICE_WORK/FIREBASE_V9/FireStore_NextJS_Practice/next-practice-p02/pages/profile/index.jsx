import { db } from "../../firebase";
import {collection, getDocs} from "firebase/firestore"
import { useRouter } from 'next/router'

const Profile = ({users}) => {
    const router = useRouter();
    const { query: {uid} } = router;
    const prop = {
        uid
    }
    return (
        <div>
            <h1>User ID: {users?.id}</h1>
        </div>
    )
}

export default Profile;

export async function getStaticProps() {
    const usersRef = collection(db, 'users');
    const users = [];

    getDocs(usersRef).then((snapshot) => {
        const tempUsers = []
        snapshot.docs.map(doc => {
            tempUsers.push({...doc.data(), id: doc.id})
        })

        users[...tempUsers]
    })


    return {
        props: {
            users: users
        }
    }
}