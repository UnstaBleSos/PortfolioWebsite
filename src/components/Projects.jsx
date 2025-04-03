import React from 'react';

export default function Projects() {
  const projects = [
    { name: 'Secure Password Manager ', 
      description: 'Designed and developed a Secure Password Manager using React and Firebase Firestore for storing and managing user credentials efficiently',
       link: '#', 
       code: 'https://github.com/UnstaBleSos/React_Firebase_CRUD' },
    { name: 'Random Password Generator', 
      description: 'Developed a Random Password Generator using React, utilizing useEffect and useCallback hooks to generate secure passwords dynamically.', 
      link: '#', 
      code: 'https://github.com/UnstaBleSos/REACT_RandomPasswordGenerator' },
    { name: 'Digital Gunaso (Team Project)', 
      description: ' Collaborated in a team during a hackathon to develop a digital grievance management system,',
       link: '#',
        code: 'https://github.com/RijenMaharjan/digitalGunaso' },
    { name: 'Ecommerce Product Recommendation System', 
      description: '  Designed and implemented a content-based recommendation system using TF-IDF vectorization and cosine similarity to suggest products based on user preferences and product descriptions.',
       link: '#',
        code: 'https://github.com/RijenMaharjan/digitalGunaso' },
        { name: 'LLM Response Generator', 
          description: 'Implemented a response generator using LLM that provides the immediate response based on the user form for specific grievance conveyed to the respective government body',
           link: '#',
            code: 'https://github.com/UnstaBleSos/LLm_Response-Generator' },
            { name: 'Calculator', 
              description: 'Made a simple calculator in REACT with TAILWINDCSS',
               link: '#',
                code: 'https://github.com/UnstaBleSos/CodSoft_Calculator' },
            { name: 'Zoo Website (Chidiya Khana)', 
              description: 'Made a zoo website with CRUD operation by admin, implemented Esewa API as payment  ',
               link: '#',
                code: 'https://github.com/ashutoshKhanal313/Zoo-Website-' },
  ];

  return (
    <section id='projects' className="py-12 px-4 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a href={project.code} target='_blank' className="text-blue-500 hover:underline">GitHub </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
