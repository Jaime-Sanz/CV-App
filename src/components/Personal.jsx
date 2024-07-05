import React, { useState } from 'react';
import styles from '../styles/Personal.module.css';

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
        setPersonalData({ name: '', address: '', email: '', phone: '' });
    };


    return (
        <>
            <form className={styles['personal-form']} onSubmit={handleSubmit}>
                <label className={styles['personal-label']}>Full Name:</label>
                <input type="text" 
                       name='name' 
                       value={personal.name} 
                       onChange={handleChange}
                       className={styles['personal-input']} 
                />
                <label className={styles['personal-label']}>Address:</label>
                <input type="text" 
                       name='address' 
                       value={personal.address} 
                       onChange={handleChange}
                       className={styles['personal-input']} 
                />
                <label className={styles['personal-label']}>Email:</label>
                <input type="email" 
                       name='email' 
                       value={personal.email} 
                       onChange={handleChange}
                       className={styles['personal-input']} 
                />
                <label className={styles['personal-label']}>Phone Number:</label>
                <input type="tel" 
                       name='phone' 
                       value={personal.phone} 
                       onChange={handleChange}
                       className={styles['personal-input']} 
                />
                <input type="submit" value="Submit" className={styles['personal-submit']} />
            </form>
        </>
    );
}
