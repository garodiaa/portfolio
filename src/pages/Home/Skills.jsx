import React from 'react';
import ScrollVelocity from '../../components/ScrollVelocity';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaPhp, 
  FaReact, 
  FaNodeJs, 
  FaPython 
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiExpress, 
  SiFirebase, 
  SiMongodb 
} from 'react-icons/si';

const Skills = () => {
    const skills = [
        { name: 'HTML', icon: <FaHtml5 className="ml-8 w-8 h-8 text-orange-500" /> },
        { name: 'CSS', icon: <FaCss3Alt className="w-8 h-8 text-blue-500" /> },
        { name: 'JavaScript', icon: <FaJs className="w-8 h-8 text-yellow-500" /> },
        { name: 'PHP', icon: <FaPhp className="w-8 h-8 text-purple-500" /> },
        { name: 'React.js', icon: <FaReact className="w-8 h-8 text-cyan-500" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8 text-white" /> },
        { name: 'Express.js', icon: <SiExpress className="w-8 h-8 text-gray-400" /> },
        { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8 text-green-500" /> },
        { name: 'Firebase', icon: <SiFirebase className="w-8 h-8 text-orange-400" /> },
        { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8 text-green-600" /> },
        { name: 'Python', icon: <FaPython className="w-8 h-8 text-blue-400" /> },
    ];

    return (
        <div className="py-16">
            <h2 className="text-4xl font-light text-center mb-12">My Skills</h2>
            <ScrollVelocity
                skills={skills}
                velocity={50}
                className="skill-item"
                singleDirection={true}
            />
        </div>
    );
};

export default Skills;