import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import ManageFood from './ManageFood';

const ManageFoods = () => {
    const { user } = useContext(AuthContext)
    const uerEmail = user.email;
    console.log(uerEmail)
    const [mangeFood, setManageFood] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:2003/manageuserfood?email=${uerEmail}`)
            .then(res => setManageFood(res.data))
            .catch(err => console.log(err.message))
    }, [])

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {mangeFood.map(userFood => <ManageFood userFood={userFood} key={userFood._id}></ManageFood>)}
            </div>
        </div>
    );
};

export default ManageFoods;