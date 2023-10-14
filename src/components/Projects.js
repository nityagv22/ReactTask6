
import React from 'react';


const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A Paragraph Word Counter',
   
    projectLink: 'https://react-task1-xi-six.vercel.app/', 
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'A Calculator App',
    
    projectLink: 'https://react-tas12.vercel.app/', 
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'A Color Picker App',
    
    projectLink: 'https://react-task3-livid.vercel.app/', 
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'An Age Calculator',
   
    projectLink: 'https://react-task5-azure.vercel.app/',
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="project-content">
        <h2>Projects</h2>
        <div className="project-cards">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
