import React from 'react';
import { TfiArrowCircleRight } from "react-icons/tfi";
import { CiShoppingCart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";



const MostPopularItems = () => {
    return (
        <div className=' px-4 py-5 bg-slate-200 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24  lg:px-8'>
            <div>
                <h1 className='text-2xl md:text-[30px] lg:text-[40px] font-bold '>Most Popular Items</h1>
            </div>
            <div>
                <div className='pt-5 md:pt-10 grid lg:grid-cols-2 gap-4'>

                    <div className=' md:flex gap-4 image-box duration-300 shadow-lg'>
                        <div className='relative image-box rounded-lg duration-300 overflow-hidden max-w-full'>
                            <img className=' images duration-300 h-full w-full rounded-lg' src="https://i.ibb.co/Rp7gRfZ/popular-1.png" alt="" />
                            <div className='top-0 left-0 absolute bg-black p-1 rounded'>
                                <h1 className='text-white flex items-center gap-1'>
                                    <FaStar className='text-yellow-400' />
                                    4.5(6.5K)</h1>
                            </div>
                        </div>

                        <div className='p-3'>
                            <div>
                                <h1 className='text-[20px] md:text-[24px] font-bold pt-5 '>Quinoa-Stuffed Bell Pepper</h1>
                            </div>
                            <div className='flex items-center text-center gap-2 text-lg pt-2'>
                                <div>
                                    <TfiArrowCircleRight className='text-[#ff663c]' />
                                </div>
                                <div>
                                    <h1>4 Paces Chicken</h1>
                                </div>
                            </div>
                            <div className='flex items-center text-center gap-2 text-lg pt-2'>
                                <div>
                                    <TfiArrowCircleRight className='text-[#ff663c]' />
                                </div>
                                <div>
                                    <h1>Spicy Sauce</h1>
                                </div>
                            </div>
                            <div className='flex items-center text-center gap-2 text-lg pt-2 '>
                                <div>
                                    <h1>$20.00</h1>
                                </div>
                                <div>
                                    <button className='duration-500 buttons flex border border-red-700 p-2 rounded-lg items-center text-center md:gap-2'>
                                        <div>
                                            <CiShoppingCart />
                                        </div>
                                        <div>
                                            <h1> Add to Cart</h1>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' md:flex gap-4 image-box duration-300 shadow-lg'>
                        <div className='relative image-box rounded-lg duration-300 overflow-hidden max-w-full'>
                            <img className=' images duration-300 w-full h-full rounded-lg' src="https://i.ibb.co/9G1sMJQ/popular-2.png" alt="" />
                            <div className='top-0 left-0 absolute bg-black p-1 rounded'>
                                <h1 className='text-white flex items-center gap-1'>
                                    <FaStar className='text-yellow-400' />
                                    4.7(2.5K)</h1>
                            </div>
                        </div>

                        <div className='p-3'>
                            <div>
                                <h1 className='text-[20px] md:text-[24px] font-bold pt-5 '>Grilled Pork Chop Chutney</h1>
                            </div>
                            <div className='flex items-center text-center gap-2 text-lg pt-2'>
                                <div>
                                    <TfiArrowCircleRight className='text-[#ff663c]' />
                                </div>
                                <div>
                                    <h1>4 Paces Chicken</h1>
                                </div>
                            </div>
                            <div className='flex items-center text-center gap-2 text-lg pt-2'>
                                <div>
                                    <TfiArrowCircleRight className='text-[#ff663c]' />
                                </div>
                                <div>
                                    <h1>Spicy Sauce</h1>
                                </div>
                            </div>
                            <div className='flex items-center text-center gap-2 text-lg pt-2 '>
                                <div>
                                    <h1>$60.00</h1>
                                </div>
                                <div>
                                    <button className='duration-500 buttons flex border border-red-700 p-2 rounded-lg items-center text-center md:gap-2'>
                                        <div>
                                            <CiShoppingCart />
                                        </div>
                                        <div>
                                            <h1> Add to Cart</h1>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' md:flex gap-4 image-box duration-300 shadow-lg'>
                        <div className='relative image-box rounded-lg duration-300 overflow-hidden max-w-full'>
                            <img className=' images duration-300 w-full h-full rounded-lg' src="https://i.ibb.co/Q6Frk8x/popular-3.png" alt="" />
                            <div className='top-0 left-0 absolute bg-black p-1 rounded'>
                                <h1 className='text-white flex items-center gap-1'>
                                    <FaStar className='text-yellow-400' />
                                    4.9(8.5K)</h1>
                            </div>
                        </div>

                        <div className='p-3'>
                            <div>
                                <h1 className='text-[20px] md:text-[24px] font-bold pt-5 '>Fish Tacos Chipotle Crema</h1>
                            </div>
                            <div className='flex items-center text-center gap-2 text-lg pt-2'>
                                <div>
                                    <TfiArrowCircleRight className='text-[#ff663c]' />
                                </div>
                                <div>
                                    <h1>5 Paces Chicken</h1>
                                </div>
                            </div>
                            <div className='flex items-center text-center gap-2 text-lg pt-2'>
                                <div>
                                    <TfiArrowCircleRight className='text-[#ff663c]' />
                                </div>
                                <div>
                                    <h1>Spicy Sauce</h1>
                                </div>
                            </div>
                            <div className='flex items-center text-center gap-2 text-lg pt-2 '>
                                <div>
                                    <h1>$10.00</h1>
                                </div>
                                <div>
                                    <button className='duration-500 buttons flex border border-red-700 p-2 rounded-lg items-center text-center md:gap-2'>
                                        <div>
                                            <CiShoppingCart />
                                        </div>
                                        <div>
                                            <h1> Add to Cart</h1>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' md:flex gap-4 image-box duration-300 shadow-lg'>
                        <div className='relative image-box rounded-lg duration-300 overflow-hidden max-w-full'>
                            <img className=' images duration-300 w-full h-full rounded-lg' src="https://i.ibb.co/x7SyDMc/popular-4.png" alt="" />
                            <div className='top-0 left-0 absolute bg-black p-1 rounded'>
                                <h1 className='text-white flex items-center gap-1'>
                                    <FaStar className='text-yellow-400' />
                                    4.1(3.5K)</h1>
                            </div>
                        </div>

                        <div className='p-3'>
                            <div>
                                <h1 className='text-[20px] md:text-[24px] font-bold pt-5 '>BBQ Pulled Pork Sandwich</h1>
                            </div>
                            <div className='flex items-center text-center gap-2 text-lg pt-2'>
                                <div>
                                    <TfiArrowCircleRight className='text-[#ff663c]' />
                                </div>
                                <div>
                                    <h1>3 Paces Chicken</h1>
                                </div>
                            </div>
                            <div className='flex items-center text-center gap-2 text-lg pt-2'>
                                <div>
                                    <TfiArrowCircleRight className='text-[#ff663c]' />
                                </div>
                                <div>
                                    <h1>Spicy Sauce</h1>
                                </div>
                            </div>
                            <div className='flex items-center text-center gap-2 text-lg pt-2 '>
                                <div>
                                    <h1>$50.00</h1>
                                </div>
                                <div>
                                    <button className='duration-500 buttons flex border border-red-700 p-2 rounded-lg items-center text-center md:gap-2'>
                                        <div>
                                            <CiShoppingCart />
                                        </div>
                                        <div>
                                            <h1> Add to Cart</h1>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' md:flex gap-4 image-box duration-300 shadow-lg'>
                        <div className='relative image-box rounded-lg duration-300 overflow-hidden max-w-full'>
                            <img className=' images duration-300 w-full h-full rounded-lg' src="https://i.ibb.co/gdJj8Pw/popular-5.png" alt="" />
                            <div className='top-0 left-0 absolute bg-black p-1 rounded'>
                                <h1 className='text-white flex items-center gap-1'>
                                    <FaStar className='text-yellow-400' />
                                    4.2(2.7K)</h1>
                            </div>
                        </div>

                        <div className='p-3'>
                            <div>
                                <h1 className='text-[20px] md:text-[24px] font-bold pt-5 '>Greens Salad Vinaigrette</h1>
                            </div>
                            <div className='flex items-center text-center gap-2 text-lg pt-2'>
                                <div>
                                    <TfiArrowCircleRight className='text-[#ff663c]' />
                                </div>
                                <div>
                                    <h1>7 Paces Chicken</h1>
                                </div>
                            </div>
                            <div className='flex items-center text-center gap-2 text-lg pt-2'>
                                <div>
                                    <TfiArrowCircleRight className='text-[#ff663c]' />
                                </div>
                                <div>
                                    <h1>Spicy Sauce</h1>
                                </div>
                            </div>
                            <div className='flex items-center text-center gap-2 text-lg pt-2 '>
                                <div>
                                    <h1>$40.00</h1>
                                </div>
                                <div>
                                    <button className='duration-500 buttons flex border border-red-700 p-2 rounded-lg items-center text-center md:gap-2'>
                                        <div>
                                            <CiShoppingCart />
                                        </div>
                                        <div>
                                            <h1> Add to Cart</h1>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' md:flex gap-4 image-box duration-300 shadow-lg'>
                        <div className='relative image-box rounded-lg duration-300 overflow-hidden max-w-full'>
                            <img className=' images duration-300 w-full h-full rounded-lg' src="https://i.ibb.co/7jCvdHd/popular-6.png" alt="" />
                            <div className='top-0 left-0 absolute bg-black p-1 rounded'>
                                <h1 className='text-white flex items-center gap-1'>
                                    <FaStar className='text-yellow-400' />
                                    4.8(3.7K)</h1>
                            </div>
                        </div>

                        <div className='p-3'>
                            <div>
                                <h1 className='text-[20px] md:text-[24px] font-bold pt-5 '>Bruschetta Tomato & Basil</h1>
                            </div>
                            <div className='flex items-center text-center gap-2 text-lg pt-2'>
                                <div>
                                    <TfiArrowCircleRight className='text-[#ff663c]' />
                                </div>
                                <div>
                                    <h1>4Paces Chicken</h1>
                                </div>
                            </div>
                            <div className='flex items-center text-center gap-2 text-lg pt-2'>
                                <div>
                                    <TfiArrowCircleRight className='text-[#ff663c]' />
                                </div>
                                <div>
                                    <h1>Spicy Sauce</h1>
                                </div>
                            </div>
                            <div className='flex items-center text-center gap-2 text-lg pt-2 '>
                                <div>
                                    <h1>$50.00</h1>
                                </div>
                                <div>
                                    <button className='duration-500 buttons flex border border-red-700 p-2 rounded-lg items-center text-center md:gap-2'>
                                        <div>
                                            <CiShoppingCart />
                                        </div>
                                        <div>
                                            <h1> Add to Cart</h1>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MostPopularItems;