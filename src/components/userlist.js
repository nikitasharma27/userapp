import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, getUsers] = useState([]);

    useEffect(() => {
        axios.get('https://mocki.io/v1/f60f8c81-06ae-421d-a8aa-eca1548e18d8')
            .then(res => {
                console.log(res.data.users);
                getUsers(res.data.users);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);


    return (
        <div>
            <h1>Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserList;