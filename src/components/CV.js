import React from "react";

const CV = props => {
    const {
        firstName,
        lastName,
        title,
        location,
        email,
        phone,
        website,
        linkedin
    } = props;

    return (
        <div>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{title}</p>
            <p>{location}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
            <p>{linkedin}</p>
        </div>
    )
}

export default CV;