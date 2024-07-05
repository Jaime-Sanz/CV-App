import React, { useState } from "react";
import styles from '../styles/Experience.module.css'

export default function Experience(props){
    const [experience, setExperienceData] = useState({
        company: '',
        occupation: '',
        location: '',
        date: '',
        statement: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExperienceData((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({ ...experience });
        setExperienceData({ company: '', occupation: '', location: '', date: '', statement: ''});
    };
    

    return(
        <>
        <form className={styles['experience-form']} onSubmit={handleSubmit}>
            <label className={styles['experience-label']}>Comapny Name:</label>
            <input type="text" 
                   name="company"
                   value={experience.company}
                   onChange={handleChange}
                   className={styles['experience-input']}
                   required
            />
            <label className={styles['experience-label']}>Job Occupation:</label>
            <input type="text" 
                   name="occupation"
                   value={experience.occupation}
                   onChange={handleChange}
                   className={styles['experience-input']}
                   required
            />
            <label className={styles['experience-label']}>Job Location:</label>
            <input type="text" 
                   name="location"
                   value={experience.location}
                   onChange={handleChange}
                   className={styles['experience-input']}
                   required
            />
            <label className={styles['experience-label']}>Date Worked:</label>
            <input type="text" 
                   name="date"
                   value={experience.date}
                   onChange={handleChange} 
                   className={styles['experience-input']}
                   required
            />
            <label className={styles['experience-label']}>Job Description:</label>
            <input type="text" 
                   name="statement"
                   value={experience.statement}
                   onChange={handleChange} 
                   className={styles['experience-input']}
                   required
            />
            <input type="submit" value="Submit" className={styles['experience-submit']}/>
        </form>
        </>
    );
}