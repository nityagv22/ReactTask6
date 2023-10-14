
import React from 'react';


const education = [
  {
    id: 1,
    institution: 'Vellore Institute of Technology',
    degree: 'BTech. in Computer Science with a specialization in Data Analytics.',
    year: '2021 - ',
  },
  {
    id: 2,
    institution: 'CS Academy',
    degree: 'High School Diploma',
    year: '2019 - 2021',
  },
];

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React.js',
  'Node.js',
  'Python',
  'Java',
  'Git',
  
];

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="resume-content">
        <h2>Resume</h2>

        <div className="education">
          <h3>Education</h3>
          <ul className="education-timeline">
            {education.map((edu) => (
              <li key={edu.id}>
                <div className="timeline-item">
                  <h4>{edu.institution}</h4>
                  <p>{edu.degree}</p>
                  <p>{edu.year}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="skills">
          <h3>Skills</h3>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
