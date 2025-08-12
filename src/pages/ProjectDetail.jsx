import React from 'react';
import { useParams, useNavigate } from 'react-router';
import SpotlightCard from '../components/SpotlightCard';
import TiltedCard from '../components/TitledCard';
import projectsData from '../data/projects.json';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const project = projectsData.projects.find(p => p.id === parseInt(id));
    
    if (!project) {
        return (
            <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
                    <button 
                        onClick={() => navigate('/')}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg"
                    >
                        Go Back Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Back Button */}
                <button 
                    onClick={() => navigate(-1)}
                    className="mb-8 text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors duration-200"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Projects
                </button>

                {/* Hero Section */}
                <SpotlightCard className="mb-12" spotlightColor="rgba(69, 0, 255, 0.4)">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                {project.name}
                            </h1>
                            <p className="text-xl text-gray-300 mb-6">
                                {project.title}
                            </p>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                {project.briefDescription}
                            </p>
                            
                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={project.liveSiteLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline btn-neutral hover:bg-white hover:text-black py-3 px-6 rounded-lg font-medium transition-colors duration-200 inline-flex items-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    Live Project
                                </a>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline btn-neutral hover:bg-white hover:text-black py-3 px-6 rounded-lg font-medium transition-colors duration-200 inline-flex items-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                    </svg>
                                    GitHub Repository
                                </a>
                            </div>
                        </div>
                        
                        <div className="h-80">
                            <TiltedCard
                                imageSrc={project.coverImage}
                                altText={project.name}
                                captionText={project.name}
                                containerHeight="320px"
                                containerWidth="100%"
                                imageHeight="320px"
                                imageWidth="100%"
                                scaleOnHover={1.05}
                                rotateAmplitude={12}
                                showMobileWarning={false}
                                showTooltip={false}
                            />
                        </div>
                    </div>
                </SpotlightCard>

                {/* Tech Stack */}
                <SpotlightCard className="mb-12" spotlightColor="rgba(69, 0, 255, 0.4)">
                    <h2 className="text-2xl font-bold text-white mb-6">Technology Stack</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {project.techStack.map((tech, index) => (
                            <div 
                                key={index}
                                className="bg-blue-500/20 text-blue-300 py-3 px-4 rounded-lg border border-blue-500/30 text-center font-medium hover:bg-blue-500/30 transition-colors duration-200"
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                </SpotlightCard>

                {/* Challenges and Improvements */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Challenges */}
                    <SpotlightCard spotlightColor="rgba(255, 0, 100, 0.15)">
                        <h2 className="text-2xl font-bold text-white mb-6">Challenges Faced</h2>
                        <ul className="space-y-4">
                            {project.challenges.map((challenge, index) => (
                                <li 
                                    key={index}
                                    className="flex items-start gap-3 text-gray-300"
                                >
                                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <span>{challenge}</span>
                                </li>
                            ))}
                        </ul>
                    </SpotlightCard>

                    {/* Future Improvements */}
                    <SpotlightCard spotlightColor="rgba(0, 255, 100, 0.15)">
                        <h2 className="text-2xl font-bold text-white mb-6">Future Improvements</h2>
                        <ul className="space-y-4">
                            {project.improvements.map((improvement, index) => (
                                <li 
                                    key={index}
                                    className="flex items-start gap-3 text-gray-300"
                                >
                                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <span>{improvement}</span>
                                </li>
                            ))}
                        </ul>
                    </SpotlightCard>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
