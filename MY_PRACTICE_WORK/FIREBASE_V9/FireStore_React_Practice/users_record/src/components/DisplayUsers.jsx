import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers, getUsers } from '../redux-store/Drugs/drugsSlice';
import Users from './Users';

export default function DisplayUsers(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch])

    return (
        <div>
            
        </div>
    )
}
