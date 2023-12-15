import React from 'react';
import ChefRecipieBanner from './ChefRecipieBanner';
import ContactContent from './ContactContent';

const Contact = () => {
    return (
        <>
            <ChefRecipieBanner heading="CONTACT PAGE" title="Contact Page" />
            <div className='relative top-[16rem] flex flex-col items-center p-2'>
                <ContactContent />
            </div>
        </>
    );
};

export default Contact;