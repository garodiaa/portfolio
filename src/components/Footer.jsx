import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNode } from 'react-icons/fa';
import { SiTailwindcss, SiVercel, SiVite } from 'react-icons/si';

const Footer = () => {
    const socialLinks = [
        {
            href: "https://github.com/garodiaa",
            icon: <FaGithub className="w-8 h-8" />,
            label: "GitHub",
        },
        {
            href: "https://www.linkedin.com/in/sourav-garodia/",
            icon: <FaLinkedin className="w-8 h-8" />,
            label: "LinkedIn",
        },
        {
            href: "mailto:souravgarodia111@gmail.com",
            icon: <FaEnvelope className="w-8 h-8" />,
            label: "Email",
        },
    ];



    return (
        <footer className="w-full py-12 border-t border-[#ffffff10]">
            <div className="max-w-5xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
                    
                    {/* Social Links Section */}
                    <div className="flex flex-col lg:items-start items-center space-y-6">
                        <div className="flex space-x-6 sm:space-x-8">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center group"
                                    aria-label={link.label}
                                >
                                    <div className="text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out">
                                        {link.icon}
                                    </div>
                                </a>
                            ))}
                        </div>
                        
                
                    </div>

                   

                   
                </div>

                {/* Copyright Section */}
                <div className="mt-12 pt-8 border-t border-[#ffffff10]">
                    <p className="text-center text-sm text-[var(--white-icon)]">
                        <span className="block sm:inline">
                            Copyright © 2025{' '}
                            <a 
                                href="https://github.com/garodiaa" 
                                className="hover:text-white transition-colors duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Sourav Garodia
                            </a>
                            . All rights reserved.
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;