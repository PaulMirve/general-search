import React from 'react';

export default function UserCard({ name, lastName, birthday, department, photo }) {
    return (
        <div className="user-card">
            <img src={photo} alt={`${name} ${lastName}`} className="user-card__photo" />
            <div className="user-card__content">
                <h1 className="user-card__name">{`${name} ${lastName}`}</h1>
                <p className="user-card__birthday">{birthday}</p>
                <p className="user-card__department">{department}</p>
            </div>
        </div>
    )
}
