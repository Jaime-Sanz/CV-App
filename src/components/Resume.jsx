import React from 'react';
import styles from '../styles/Resume.module.css'

export default function Resume({ formData, onRemoveEducation, onRemoveExperience }) {
    const personalInfo = {...formData.Personal};
    const educationInfo = Object.values(formData.Education);
    const experienceInfo = Object.values(formData.Experience);

    const areaCode = personalInfo.phone.slice(0, 3);
    const firstPart = personalInfo.phone.slice(3, 6);
    const lastPart = personalInfo.phone.slice(6);
    const phoneNumber = `(${areaCode}) ${firstPart}-${lastPart}`;

    return (
    <div className={styles.container}>
        <header>
            <h1 className={styles.name}>{personalInfo.name || 'Example Example'}</h1>
            <div className={styles['contact-info']}>
              <p>{personalInfo.address ? `${personalInfo.address} |` : '5121 Example st Example, CA |'}</p>
              <p>{personalInfo.email ? `${personalInfo.email} |` : 'MrExample@Example.com |'}</p>
              <p>{phoneNumber.length > 4 ? phoneNumber : '(555) 511-0212'}</p>
            </div>
        </header>
        <h3 className={styles.headers}>Education</h3>
        <main>
        {educationInfo.length > 0 ? (
          educationInfo.map((college, index) => (
            <div key={index} className={styles['education-container']}>
              <div className={styles['line-1']}>
                <h3>{college.college}</h3>
                <p>{college.location}</p>
              </div>
              <div className={styles['line-2']}>
                <p>{college.degree} | GPA: {college.gpa}</p>
                <p>{college.date}</p>
              </div>
              <button onClick={() => onRemoveEducation(index)} className={styles.delete}>Remove College</button>
            </div>))) : (
            <div className={styles['education-container']}>
              <div className={styles['line-1']}>
                <h3>California State University of Example</h3>
                <p>Example, CA</p>
              </div>
              <div className={styles['line-2']}>
                <p>Bachelors of Science in Example | GPA: 4.0 </p>
                <p>Example 2023 - Example 2027</p>
              </div>
            </div>)}
        </main>
        <h3 className={styles.headers}>Experience</h3>
        <footer>
        {experienceInfo.length > 0 ? (
          experienceInfo.map((job, index) => (
            <div key={index} className={styles['experience-container']}>
              <div className={styles['line-1']}>
                <h3>{job.company}</h3>
                <p>{job.date}</p>
              </div>
              <div className={styles['line-2']}>
                <p>{job.occupation}</p>
                <p>{job.location}</p>
              </div>
              <p className={styles.statement}>{job.statement}</p>
              <button onClick={() => onRemoveExperience(index)} className={styles.delete}>Remove Occupation</button>
            </div>))) : (
            <div className={styles['experience-container']}>
              <div className={styles['line-1']}>
                <h3>In N Example Paper</h3>
                <p>Example 2023 - Example 2027</p>
              </div>
              <div className={styles['line-2']}>
                <p>Assistant Example</p>
                <p>Example, CA</p>
              </div>
                <p className={styles.statement}>Delectus error modi temporibus enim fugit quam quod, aut quos officia incidunt? Quam eum praesentium culpa debitis vitae corporis architecto tempore quis.</p>
            </div>)}
        </footer>
    </div>
    );
}