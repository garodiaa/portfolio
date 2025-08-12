import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNode } from 'react-icons/fa';
import { SiTailwindcss, SiVercel, SiVite } from 'react-icons/si';

const Footer = () => {
    
    return (
        <footer className="w-full py-12 border-t border-[#ffffff10]">
            
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
        </footer>
    );
};

export default Footer;