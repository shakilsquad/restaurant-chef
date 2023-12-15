import React from 'react';
import ChefRecipieBanner from './ChefRecipieBanner';
import AboutContent from './AboutContent';
import FooterTop from './FooterTop';

const About = () => {
    return (
        <>
           <ChefRecipieBanner heading="ABOUT PAGE" title="About Page" />
            <div className='relative top-[16rem] flex flex-col items-center p-2'>
                <AboutContent />
            <FooterTop></FooterTop>
            </div>
        </>
    );
};

export default About;
