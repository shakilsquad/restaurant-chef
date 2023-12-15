import React from 'react';
import { FaStar } from "react-icons/fa";

const FooterTop = () => {
    return (
        <div className='bg-[#000929d2] container mx-auto rounded-lg  md:mt-10'>
            <section className="text-white  lg:w-[1000px] p-10 px-5 mx-auto  my-4 rounded-md blog">
                <div className='md:pb-6'>
                    <h1 className='text-center font-bold text-xl md:text-[29px] lg:text-[40px]'>What’s Our Customer Say</h1>
                </div>
                <div className='pt-6 md:flex gap-5'>
                    <div className='mb-6'>
                        <div className='border p-3 hover:bg-[#000929]  duration-700 cursor-pointer  rounded-lg'>
                            <h1 className='text-[14px]'>"An absolute foodie's paradise! The flavors at ReservQ are a symphony of delight. Every bite tells a story of passion and skill. A must-visit for anyone seeking beyond compare."</h1>
                        </div>
                        <div className='pt-6 flex items-center gap-2'>
                            <div>
                                <img src="https://i.ibb.co/bJQnw5N/customer-1.png" alt="" />
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <FaStar className='text-yellow-400' />
                                    <FaStar className='text-yellow-400' />
                                    <FaStar className='text-yellow-400' />
                                    <FaStar className='text-yellow-400' />
                                    <FaStar className='text-yellow-400' />
                                </div>
                                <h1 className='text-[24px] font-bold'>Jonson Roy</h1>
                                <p className='text-[16px]'>Job Holder</p>
                            </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className='border p-3 hover:bg-[#000929]  duration-700 cursor-pointer   rounded-lg'>
                            <h1 className='text-[14px]'>"An absolute foodie's paradise! The flavors at ReservQ are a symphony of delight. Every bite tells a story of passion and skill. A must-visit for anyone seeking beyond compare."</h1>
                        </div>
                        <div className='pt-6 flex items-center gap-2'>
                            <div>
                                <img src="https://i.ibb.co/wRpx74C/customer-2.png" alt="" />
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <FaStar className='text-yellow-400' />
                                    <FaStar className='text-yellow-400' />
                                    <FaStar className='text-yellow-400' />
                                    <FaStar className='text-yellow-400' />
                                    <FaStar className='text-yellow-400' />
                                </div>
                                <h1 className='text-[24px] font-bold'>David Ethic</h1>
                                <p className='text-[16px]'>Dog Trainer</p>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <div className='border p-3 hover:bg-[#000929]  duration-700 cursor-pointer  rounded-lg'>
                            <h1 className='text-[14px]'>"An absolute foodie's paradise! The flavors at ReservQ are a symphony of delight. Every bite tells a story of passion and skill. A must-visit for anyone seeking beyond compare."</h1>
                        </div>
                        <div className='pt-6 flex items-center gap-2'>
                            <div>
                                <img src="https://i.ibb.co/HCDhrL6/customer-3.png" alt="" />
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <FaStar className='text-yellow-400' />
                                    <FaStar className='text-yellow-400' />
                                    <FaStar className='text-yellow-400' />
                                    <FaStar className='text-yellow-400' />
                                    <FaStar className='text-yellow-400' />
                                </div>
                                <h1 className='text-[24px] font-bold'>Robert Fox</h1>
                                <p className='text-[16px]'>Bike Trainer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FooterTop;