import React from 'react';
import ShinyText from '../../components/ShinyText';
import { HiDownload } from 'react-icons/hi';


const Hero = () => {
    return (
        <div className='mx-auto min-h-[85vh] place-content-center'>
            <h1 className='text-white font-semibold text-6xl text-center'>Hi I'm <span className='font-light italic'>Sourav Garodia</span></h1>
            <h2 className='text-white font-light text-2xl text-center mt-4'><ShinyText text="I create solutions that connect ideas with people" disabled={false} speed={5} className='custom-class' /></h2>

           
            {/* Badge and Button Section */}
            <div className='flex items-center justify-center gap-4 mt-8'>
                <span className='btn glass font-light'>MERN Developer</span>
                <button className="btn btn-accent btn-outline rounded-xl gap-2">
                    <HiDownload className="w-4 h-4" />
                    Download CV
                </button>
            </div>


        </div>
    );
};

export default Hero;