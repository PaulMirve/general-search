import React, { useState } from 'react';
import User from '../../classes/User';
import UserCard from '../UserCard/UserCard';

const usersArray = [
    new User('Veeti', 'Separem', '12/07/1994', 'Sales', '../img/user-1.jpeg'),
    new User('Olivia', 'Jacobs', '24/10/1992', 'IT', '../img/user-2.jpeg'),
    new User('Antoni', 'Gillot', '31/01/1998', 'Sales', '../img/user-3.jpeg'),
    new User('Mario', 'Palmer', '11/02/1991', 'Accountable', '../img/user-4.jpeg'),
];

export default function Landing() {
    const [users, setUsers] = useState(usersArray);

    const onInputText = (value) => {
        setUsers([...filterUsers(value)]);
    }

    const filterUsers = (searchKey) => {
        return usersArray.filter(obj => {
            return Object.keys(obj).some(key => {
                return obj[key].toLowerCase().includes(searchKey.toLowerCase());
            })
        })
    }

    return (
        <div className="landing">
            <div className="container">
                <div className="search-box mb-sm">
                    <div className="form-group">
                        <label htmlFor="search" className="label">Search:</label>
                        <input id="search" onChange={(e) => onInputText(e.target.value)} placeholder="Search by any field" type="text" className="input" />
                    </div>
                </div>
                <div className="users__grid">
                    {
                        users.map((user, index) => {
                            return <UserCard key={index} {...user} />;
                        })
                    }
                </div>
            </div>
        </div>
    )
}
