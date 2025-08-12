import React from 'react';
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

const Socials = () => {
    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/sourav-garodia/',
            icon: <FaLinkedin className="w-4 h-4" />,
            color: 'btn-neutral'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/garodiaa',
            icon: <FaGithub className="w-4 h-4" />,
            color: 'btn-neutral'
        },
        {
            name: 'YouTube',
            url: 'https://www.youtube.com/@garodia',
            icon: <FaYoutube className="w-4 h-4" />,
            color: 'btn-neutral'
        }
    ];

    return (
        <div className="flex flex-wrap items-center my-5 gap-4">
            {socialLinks.map((social) => (
                <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn ${social.color} btn-outline font-light gap-2 transition-colors duration-700 ease-in-out`}
                >
                    {social.icon}
                    {social.name}
                </a>
            ))}
        </div>
    );
};

export default Socials;