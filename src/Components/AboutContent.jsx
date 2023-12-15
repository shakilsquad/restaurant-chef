import React from 'react';
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsShop } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiSelectMultiple } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import MostPopularItems from './MostPopularItems';



const AboutContent = () => {
    return (
        <div>
            {/* About Sections */}
            <section className="bg-slate-200 container px-5 mx-auto flex flex-wrap items-center my-4 rounded-md blog">
                <div className="py-8 px-4  max-w-screen-xl lg:py-16 lg:px-6 ">
                    <h2 className="mb-10 text-3xl text-center lg:text-4xl tracking-tight font-extrabold text-slate-500">
                        About  Sections
                    </h2>
                    <div className='md:flex items-center gap-6'>
                        {/* image gallery section */}
                        <div className='flex-1'>
                            <div class="grid grid-cols-2 gap-2">
                                <div className='image-box rounded-lg duration-300 overflow-hidden'>
                                    <img class=" images  object-cover hover:scale-110  transition duration-500 h-auto max-w-full rounded-lg" src="https://i.ibb.co/pdN2RfH/blog-9.png" alt="" />
                                </div>
                                <div className='image-box rounded-lg duration-300 overflow-hidden'>
                                    <img class="images object-cover hover:scale-110  transition duration-500 h-auto max-w-full rounded-lg" src=" https://i.ibb.co/ckp1j4f/blog-8.png" alt="" />
                                </div>
                                <div className='image-box rounded-lg duration-300 overflow-hidden'>
                                    <img class="images object-cover hover:scale-110  transition duration-500 h-auto max-w-full rounded-lg" src="https://i.ibb.co/YRLNtjM/blog-5.png" alt="" />
                                </div>
                                <div className='image-box rounded-lg duration-300 overflow-hidden'>
                                    <img class=" images object-cover hover:scale-110  transition duration-500 h-auto max-w-full rounded-lg" src="https://i.ibb.co/YtYQM8Y/blog-12.png" alt="" />
                                </div>
                            </div>

                        </div>
                        {/* about description section  */}
                        <div className='flex-1 pt-5'>
                            <div>
                                <div>
                                    <h1 className='leading-10 text-2xl md:text-[40px] font-bold text-gray-400 '>Our Story of food Culinary  Excellence at ReservQ</h1>
                                    <p className='pt-4 text-[16px]'>There are many variations of passages of Lorem Ipsum available, but the to a majority have suffered alteration in some form, by injected humour, or find randomised words which don't look even slightly believable.</p>
                                </div>
                                <div className='py-4'>
                                    <p>Over 20 years’ experience providing top quality house Booking rant and sell for your Amazing Dream & Make you Happy</p>
                                </div>

                                <div className='md:flex gap-7'>
                                    <div className='mb-6 shadow-md p-2 md:p-4 hover:bg-gray-300 cursor-pointer duration-300'>
                                        <HiOutlineUserGroup className=' text-5xl p-1 rounded-full bg-red-600 text-white' />
                                        <div className='pt-4'>
                                            <h1 className='text-black font-bold text-xl '>90k+ Customers</h1>
                                            <p className='text-sm'>Believe in our service & Care</p>
                                        </div>
                                    </div>
                                    <div className='mb-6 shadow-md p-2 md:p-4 hover:bg-gray-300 cursor-pointer duration-300'>
                                        <BsShop className='text-5xl p-1 rounded-full bg-red-600 text-white' />
                                        <div className='pt-4'>
                                            <h1 className='text-black font-bold text-xl'>100+ Branch</h1>
                                            <p className='text-sm'>Food ready for occupancy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            {/* delivery system section */}
            <section className="bg-[#000929d2] container p-10 px-5 mx-auto md:mb-4  my-4 rounded-md blog">
                <div className='md:flex gap-4 flex-wrap '>
                    <div className='flex-1 '>
                        <div className='md:w-[600px] duration-700 ease-in-out rounded-lg hover:bg-[#0d1634] cursor-pointer'>
                            <img src="https://i.ibb.co/KNX24bC/process-themb.png" alt="" />
                        </div>
                    </div>
                    <div className='flex-1  pt-5 text-white'>
                        <div>
                            <h1 className='text-white pt-3 text-xl md:text-3xl lg:text-5xl leading-10 font-bold'>The Process of Crafting your Dining Experience</h1>
                        </div>
                        <div className='pt-5'>
                            <div className='mb-3 md:w-[500px] p-3 cursor-pointer  hover:bg-[#F01543] ease-in-out duration-500 bg-[#0d1634] rounded-lg flex items-center gap-4'>
                                <div className=' p-4 rounded-lg bg-[#262e49]'>
                                    <SlLocationPin className='text-3xl text-white' />
                                </div>
                                <div>
                                    <h1 className='text-[17px] md:text-[20px] font-bold'>Set your location</h1>
                                    <p className='text-[14px] pt-2'>A high quality solution beautifully food for customers</p>
                                </div>

                            </div>

                            <div className='mb-3 md:w-[500px] p-3 cursor-pointer  hover:bg-[#F01543] ease-in-out duration-500 bg-[#0d1634] rounded-lg flex items-center gap-4'>
                                <div className=' p-4 rounded-lg bg-[#262e49]'>
                                    <BiSelectMultiple className='text-3xl text-white' />
                                </div>
                                <div>
                                    <h1 className='text-[17px] md:text-[20px] font-bold'>Select Food</h1>
                                    <p className='text-[14px] pt-2'>A high quality solution beautifully food for customers</p>
                                </div>

                            </div>

                            <div className='mb-3 md:w-[500px] p-3 cursor-pointer  hover:bg-[#F01543] ease-in-out duration-500 bg-[#0d1634] rounded-lg flex items-center gap-4'>
                                <div className=' p-4 rounded-lg bg-[#262e49]'>
                                    <RiMoneyDollarBoxLine className='text-3xl text-white'/>
                                </div>
                                <div>
                                    <h1 className='text-[17px] md:text-[20px] font-bold'>PayCash or Online</h1>
                                    <p className='text-[14px] pt-2'>Providing an upscale and elegant ambiance for ..</p>
                                </div>

                            </div>

                            <div className='mb-3 md:w-[500px] p-3 cursor-pointer  hover:bg-[#F01543] ease-in-out duration-500 bg-[#0d1634] rounded-lg flex items-center gap-4'>
                                <div className=' p-4 rounded-lg bg-[#262e49]'>
                                    <CiDeliveryTruck className='text-3xl text-white' />
                                </div>
                                <div>
                                    <h1 className='text-[17px] md:text-[20px] font-bold'>Delivery or Pickup</h1>
                                    <p className='text-[14px] pt-2'>Allowing customers to easily book tables through</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Most Popular Items */}
            <section className="bg-slate-200 container p-10 px-5 mx-auto md:mt-10 my-4 rounded-md blog">
            <MostPopularItems></MostPopularItems>
            </section>

        </div>
    );
};

export default AboutContent;