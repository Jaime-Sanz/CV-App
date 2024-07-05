import React, { useState } from 'react';
import Personal from './components/Personal';
import Education from './components/Education';
import Resume from './components/Resume'
import Experience from './components/Experience';
import './styles/index.css';

export default function App() {

  const [formData, setFormData] = useState({
    Personal: {
      name: '',
      address: '',
      email: '',
      phone: ''
    },
    Education: [],
    Experience: []
  });

  const updatePersonalData = (newData) => {
    setFormData({...formData, Personal: newData });
  };

  const updateEducationData = (newCollege) => {
    setFormData({ ...formData, Education:[...formData.Education, newCollege]})
  }

  const updateExperienceData = (newJob) => {
    setFormData({ ...formData, Experience:[...formData.Experience, newJob]})
  }

  const removeEducationData = (index) => {
    setFormData(prevData => ({
      ...prevData,
      Education: prevData.Education.filter((_, i) => i !== index)
    }));
  };

  const removeExperienceData = (index) => {
    setFormData(prevData => ({
      ...prevData,
      Experience: prevData.Experience.filter((_, i) => i !== index)
    }));
  };

  const handlePrint = () => {
    window.print();
  };
  
  return (
    <div className="container">
      <div className="form-container">
      <Personal onSubmit={updatePersonalData} />
      <Education onSubmit={updateEducationData}/>
      <Experience onSubmit={updateExperienceData}/>
      <button onClick={handlePrint} className="print-button">Print Resume</button>
      </div>
      <div className="resume-container">
        <Resume formData={formData} onRemoveEducation={removeEducationData} onRemoveExperience={removeExperienceData}/>
      </div>
    </div>
  );
}