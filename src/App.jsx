import React, { useState } from 'react';
//import Education from "./Education";
//import Experience from "./Experience";
import Personal from "./Personal";
import Resume from "./Resume"

export default function App() {

  const [formData, setFormData] = useState({
    Personal: {
      name: '',
      address: '',
      email: '',
      phone: ''
    }
  });

  const updatePersonalData = (newData) => {
    setFormData({...formData, personal: newData });
  };
  
  return (
    <div className="form-container">
      <Personal onSubmit={updatePersonalData} />
      <div className="resume-container">
        <Resume formData={formData} />
      </div>
    </div>
  );
}