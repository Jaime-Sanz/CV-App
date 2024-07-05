import React from 'react';

export default function Resume({ formData, onRemoveEducation, onRemoveExperience }) {
    const personalInfo = {...formData.Personal};
    const educationInfo = Object.values(formData.Education);
    const experienceInfo = Object.values(formData.Experience);

    return (
    <div>
        <header>
            <h1>{personalInfo.name || 'Example Example'}</h1>
            <div className='contact-info'>
                <span>{personalInfo.address || '5121 Example st Example, CA'}</span>
                <span>{personalInfo.email || 'MrExample@Example.com'}</span>
                <span>{personalInfo.phone || '555 511-0212'}</span>
            </div>
        </header>
        <h2>Education</h2>
        <main>
        {educationInfo.length > 0 ? (
          educationInfo.map((college, index) => (
            <div key={index} className="education-item">
              <h3>{college.college}</h3>
              <p>{college.location}</p>
              <p>{college.degree}</p>
              <p>{college.date}</p>
              <p>GPA: {college.gpa}</p>
              <button onClick={() => onRemoveEducation(index)}>Remove College</button>
            </div>))) : (
            <div>
                <p>California State University of Example</p>
                <p>Example, CA</p>
                <p>Bachelors of Science in Example </p>
                <p>Example 2023 - Example 2027</p>
                <p>GPA: 4.0</p>
            </div>)}
        </main>
        <h2>Experience</h2>
        <footer>
        {experienceInfo.length > 0 ? (
          experienceInfo.map((job, index) => (
            <div key={index} className="education-item">
              <p>{job.company}</p>
              <p>{job.occupation}</p>
              <p>{job.location}</p>
              <p>{job.date}</p>
              <p>{job.statement}</p>
              <button onClick={() => onRemoveExperience(index)}>Remove Occupation</button>
            </div>))) : (
            <div>
                <p>In N Example Paper</p>
                <p>Assistant Example</p>
                <p>Example, CA</p>
                <p>Example 2023 - Example 2027</p>
                <p>Delectus error modi temporibus enim fugit quam quod, aut quos officia incidunt? Quam eum praesentium culpa debitis vitae corporis architecto tempore quis.</p>
            </div>)}
        </footer>
    </div>
    );
}