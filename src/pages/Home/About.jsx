import React from 'react';
import TiltedCard from '../../components/TitledCard';
import profile from '../../assets/profile_pic.jpg';
import Socials from '../../components/Socials';

const About = () => {
    return (
        <div className='flex flex-col sm:flex-row items-center justify-between mt-10 gap-10'>
            <div className="sm:mr-10">
                <h2 className="text-4xl font-light mb-4">About Me</h2>
                <p className="text-lg text-gray-500 text-justify">
                    I am Sourav Garodia, a passionate web developer with a keen interest in creating dynamic
                    and responsive web applications. I specialize in React and have experience in building
                    scalable web solutions. My goal is to deliver high-quality code and user-friendly interfaces.
                </p>
                <p className="text-lg text-gray-500 mt-4 text-justify">
                    Feel free to connect with me on LinkedIn or GitHub to discuss potential collaborations or
                    just to say hello!
                </p>
                <Socials></Socials>

            </div>

            
            <TiltedCard
                imageSrc={profile}
                altText="Sourav Garodia"
                captionText="Sourav Garodia"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent="Sourav Garodia"
            />

            


        </div>
    );
};

export default About;