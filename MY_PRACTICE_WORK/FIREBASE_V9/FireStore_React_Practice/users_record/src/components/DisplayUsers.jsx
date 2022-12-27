import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers, getUsers } from '../redux-store/Drugs/drugsSlice';

export default function DisplayUsers(){
    const dispatch = useDispatch();
    const users = useSelector(getUsers);

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch])

    return (
        <div>
            <h1>Users are:</h1>
            {users.map((user, index) => (
                <h1 key={index}>{user.id}</h1>
            ))}
        </div>
    )
}
