import React from 'react';
import { useNavigate } from 'react-router';
import SpotlightCard from '../../components/SpotlightCard';
import TiltedCard from '../../components/TitledCard';
import projectsData from '../../data/projects.json';

const ShowProjects = () => {
    const navigate = useNavigate();
    
    const handleViewDetails = (projectId) => {
        navigate(`/projects/${projectId}`);
    };

    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-light text-white mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Explore my latest work showcasing modern web technologies and innovative solutions
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.projects.map((project) => (
                        <SpotlightCard 
                            key={project.id}
                            className="h-full flex flex-col"
                            spotlightColor="rgba(69, 0, 255, 0.4)"
                        >
                            <div className="flex flex-col h-full">
                                {/* Project Image with Tilt Effect */}
                                <div className="mb-6 h-48 overflow-hidden rounded-lg">
                                    <TiltedCard
                                        imageSrc={project.coverImage}
                                        altText={project.name}
                                        captionText={project.name}
                                        containerHeight="192px"
                                        containerWidth="100%"
                                        imageHeight="192px"
                                        imageWidth="100%"
                                        scaleOnHover={1.05}
                                        rotateAmplitude={8}
                                        showMobileWarning={false}
                                        showTooltip={false}
                                    />
                                </div>

                                {/* Project Content */}
                                <div className="flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {project.name}
                                    </h3>
                                    
                                    <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="mb-4">
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.slice(0, 4).map((tech, index) => (
                                                <span 
                                                    key={index}
                                                    className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.techStack.length > 4 && (
                                                <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full border border-gray-500/30">
                                                    +{project.techStack.length - 4} more
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3 mt-auto">
                                        <button
                                            onClick={() => handleViewDetails(project.id)}
                                            className="flex-1 btn btn-outline btn-neutral hover:bg-white hover:text-black py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300"
                                        >
                                            View Details
                                        </button>
                                        
                                        <a
                                            href={project.liveSiteLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 btn btn-outline btn-neutral hover:bg-white hover:text-black py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300 text-center"
                                        >
                                            Live Site
                                        </a>
                                        
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline btn-neutral hover:bg-white hover:text-black p-2 rounded-lg transition-colors duration-300 flex items-center justify-center"
                                            title="View on GitHub"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>

                {/* View All Projects Button */}
                <div className="text-center mt-12">
                    <button 
                        onClick={() => navigate('/projects')}
                        className="btn btn-outline btn-neutral hover: py-3 px-8 rounded-lg font-medium transition-colors duration-200 inline-flex items-center gap-2"
                    >
                        View All Projects
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ShowProjects;