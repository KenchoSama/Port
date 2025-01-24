import React from 'react';

// Importing images (if using relative imports)
import MMMImage from '../assets/img/MMM.png';
import ProjectImg2 from '../assets/img/project-img2.png';
import ProjectImg3 from '../assets/img/AI.PNG';

export const Projects = () => {
  const projectData = [
    {
      title: "Generative AI Tutor",
      description: "A metrics dashboard summarizing user engagement using React and Node.js.",
      image: ProjectImg2, // Updated to use the imported image
      link: "https://github.com/ken/project-ai-dashboard",
    },
    {
      title: "Magic Math Man",
      description: "This math game leverages modularity by organizing each math category as a separate, self-contained game module, ensuring maintainability and scalability. It applies engineering principles such as abstraction, reusability, and structured design to streamline development and allow easy updates or extensions.",
      image: MMMImage, // Updated to use the imported image
      link: "https://676a2ec92e751f2f6ae292c2--joyful-frangollo-de7fc6.netlify.app/",
    },
    {
      title: "Binary Glioma Classification through Machine Learning",
      description: "This project aims to improve glioma grade classification, a critical step in guiding treatment strategies for patients with brain tumors.",
      image: ProjectImg3, // Original image path
      link: "https://github.com/ken/stock-analysis-app",
    },
  ];

  return (
    <section className="projects-section py-8 bg-indigo-800" id="projects">
      <div className="projects-container container mx-auto px-6">
        <h2 className="projects-title text-center text-4xl font-bold text-white mb-12">
          Technical Projects
        </h2>
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="project-card bg-gradient-to-r from-gray-600 to-gray-900 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title || "Project image"} // Fallback for empty title
                className="project-image w-full h-48 object-cover rounded-t-lg"
              />

              {/* Project Details */}
              <div className="project-details p-4">
                <h3 className="project-title text-blue-400 text-2xl text-center font-semibold mb-4">
                  {project.title || "Untitled Project"} {/* Fallback for empty title */}
                </h3>
                <p className="project-description text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link text-indigo-400 font-medium hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
