import React, { useState } from 'react';
import styles from '../styles/Education.module.css';

export default function Education(props) {

    const [education, setEducationData] = useState({
        college: '',
        location: '',
        degree: '',
        date: '',
        gpa: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducationData((prev) => ({ ...prev, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({ ...education });
        setEducationData({ college: '', location: '', degree: '', date: '', gpa: '' });
    };

    return (
        <>
            <form className={styles['education-form']} onSubmit={handleSubmit}>
                <label className={styles['education-label']}>College:</label>
                <input type="text"
                       name="college"
                       value={education.college}
                       onChange={handleChange} 
                       className={styles['education-input']}
                       required
                />
                <label className={styles['education-label']}>Location:</label>
                <input type="text"
                       name="location"
                       value={education.location}
                       onChange={handleChange}
                       className={styles['education-input']}
                       required
                />
                <label className={styles['education-label']}>Degree:</label>
                <input type="text"
                       name="degree"
                       value={education.degree}
                       onChange={handleChange}
                       className={styles['education-input']}
                       required
                />
                <label className={styles['education-label']}>Date Attended:</label>
                <input type="text"
                       name="date"
                       value={education.date}
                       onChange={handleChange}
                       className={styles['education-input']}
                       required
                />
                <label className={styles['education-label']}>GPA:</label>
                <input type="number"
                       name="gpa"
                       value={education.gpa}
                       onChange={handleChange}
                       className={styles['education-input']}
                       required
                />
                <input type="submit" value="Submit" className={styles['education-submit']} />
            </form>
        </>
        );
}