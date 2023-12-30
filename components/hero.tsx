"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
    return (
        
            <motion.div
                
                className="grid lg:flex lg:flex-row mt-36"
            >
                <div className="w-full lg:w-1/3 justify-center">
                    <Image src="/images/me.png" alt="Picture of Cody speaking at LaunchDarkly Galaxy" height={425} width={425} className='shadow-2xl rounded-2xl mx-auto'/>
                </div>
                <div className="w-full lg:w-2/3 space-y-8 lg:pl-8">
                    <div>
                        <p className='text-4xl md:text-6xl font-semibold text-orange-600 pt-4 lg:pt-0'>Hello, My name is Cody 👋</p>
                        <p className='text-md md:text-xl font-semibold text-orange-400 pt-2'>Builder | Marketer | Father | Decent BBQ'er </p>
                    </div>
                    <p className='text-lg xl:text-xl'>I work at <a className='text-orange-500 font-bold hover:text-orange-500/50' href="https://www.launchdarkly.com">LaunchDarkly</a> where I lead a team focused on helping developers and teams learn ways to deploy software faster. I spend most of my days building content and implementing strategies to create better connections with developer and practitioners in the technical community. Content wise, I spend most of my time building video and blog content - but enjoy most forms of digital content creation.</p>
                    <p className='text-lg xl:text-xl'>I love learning. I'm passionate about mental health, community, and mentorship. When I'm not working, I'm hanging out with my wife <a className='text-orange-500 font-bold hover:text-orange-500/50' href="https://www.instagram.com/p/CvT_pMWxTNO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">Shannon</a>, our daughters <a className='text-orange-500 font-bold hover:text-orange-500/50' href="https://www.instagram.com/p/C1QilXFxryU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">Hayley and Morgan</a>, training my <a className='text-orange-500 font-bold hover:text-orange-500/50' href="https://www.instagram.com/p/Cshs_POhloU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">Goldendoodle Charlie</a>, or working on my BBQ craft and the journey to smoke the perfect piece of meat.</p>
                    <p className='text-lg xl:text-xl'>In my past lives I've had a variety of engineering, operational, and architecture roles within the utility industry, as well as a mix of sales, marketing, and advocacy roles at VMware, HashiCorp, and Kong.</p>
                </div>
            </motion.div>
       
    );
};

export default Hero;
