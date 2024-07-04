import React, { useState } from 'react';

export default function Personal(props) {
    const [personal, setPersonalData] = useState({
        name: '',
        address: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalData((prev) => ({ ...prev, [name]: value }));
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(personal);
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Full Name:</label>
                <input type="text" 
                       name='name' 
                       value={personal.name} 
                       onChange={handleChange} />
                <label>Address:</label>
                <input type="text" 
                       name='address' 
                       value={personal.address} 
                       onChange={handleChange} />
                <label>Email:</label>
                <input type="email" 
                       name='email' 
                       value={personal.email} 
                       onChange={handleChange} />
                <label>Phone Number:</label>
                <input type="tel" 
                       name='phone' 
                       value={personal.phone} 
                       onChange={handleChange} />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}
