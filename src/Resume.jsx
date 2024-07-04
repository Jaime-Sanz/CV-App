import React from 'react';

export default function Resume({ formData }) {
    const personalInfo = {...formData.personal};

    return (
    <div className='resume'>
        <header>
            <h1>{personalInfo.name}</h1>
            <div className='contact-info'>
                <span>{personalInfo.address || 'PlaceHolder'}</span>
                <span>{personalInfo.email || 'PlaceHolder'}</span>
                <span>{personalInfo.phone || 'PlaceHolder'}</span>
            </div>
        </header>
        <h2>Education</h2>
        <main>

        </main>

    </div>
    );
}