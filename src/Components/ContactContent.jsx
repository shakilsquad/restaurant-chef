import { Accordion } from 'flowbite-react';
import React from 'react';
import { MdPermPhoneMsg } from "react-icons/md";
import { MdTextsms } from "react-icons/md";

const ContactContent = () => {
    return (
        <div>
            <section className="bg-slate-200 container px-5 mx-auto  items-center md:mb-9 rounded-md blog">
                <div className="py-8 px-4  max-w-screen-xl lg:py-16 lg:px-6 ">
                    <h2 className="mb-10 text-3xl text-center lg:text-4xl tracking-tight font-extrabold text-slate-500">
                        Contact Us Sections
                    </h2>
                    <div className='md:flex justify-between gap-8'>
                        {/* description section */}
                        <div className=''>
                            <h2 className='text-xl font-bold gradient-text'>Get in Touch with Us <br /> with Any Questions</h2>
                            <div className='mt-[20px] md:mt-[35px] lg:mt-[50px]'>
                                <div className='mb-6 shadow-lg bg-gray-50 flex justify-between items-center gap-4 p-2 rounded-lg'>
                                    <div>
                                        <MdPermPhoneMsg className='text-red-600 text-4xl md:text-5xl lg:text-7xl' />
                                    </div>
                                    <div>
                                        <h1 className='md:text-[20px] text-gray-400'>Contact Info</h1>
                                        <p className='text-sm  text-gray-400'>Open a chat or give us call at</p>
                                        <h1 className='md:text-[20px] text-gray-400'>+1 707 797 0462</h1>
                                    </div>
                                </div>
                                <div className='shadow-lg bg-gray-50 flex justify-between items-center gap-4 p-2 rounded-lg'>
                                    <div>
                                        <MdTextsms className='text-red-600 text-4xl md:text-5xl lg:text-7xl' />
                                    </div>
                                    <div>
                                        <h1 className='md:text-[20px] text-gray-400'>Send a Email</h1>
                                        <p className='text-sm  text-gray-400'>Quomodosoft@gmail</p>
                                        <p className='text-sm  text-gray-400'>abdur.rohman2003@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* form section */}
                        <div className='flex-1 mt-[20px] md:mt-[0px]'>
                            <div>
                                <form class="max-w-md mx-auto">
                                    <div class="relative z-0 w-full mb-5 group">
                                        <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                    </div>
                                    <div class="relative z-0 w-full mb-5 group">
                                        <input type="text" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telephone</label>
                                    </div>

                                    <div class="grid md:grid-cols-2 md:gap-6">
                                        <div class="relative z-0 w-full mb-5 group">
                                            <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                            <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                        </div>
                                        <div class="relative z-0 w-full mb-5 group">
                                            <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                            <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                                        </div>
                                    </div>
                                    <div class="grid md:grid-cols-2 md:gap-6">
                                        <div className='mb-3 md:w-[360px] lg:w-[450px]'>
                                            <label for="message" class="block mb-2 text-sm font-medium text-gray-500 ">Your message</label>
                                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* contact section map area */}
            <div></div>
            {/* Queries Answered section */}
            <section className="bg-slate-200 container px-5 mx-auto flex flex-wrap items-center  rounded-md blog">
                <div className="py-8 px-4  max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div className='md:flex gap-3 items-center'>

                        <div className='flex-1 px-3'>
                            <h2 className="mb-10 text-[25px]  lg:text-4xl tracking-tight font-extrabold text-slate-500">
                                Foodie FAQ: Your Culinary Queries Answered
                            </h2>
                            <Accordion>
                                <Accordion.Panel>
                                    <Accordion.Title>What is Flowbite?</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                                            dropdowns, modals, navbars, and more.
                                        </p>

                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title>Is there a Figma file available?</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                                            has a design equivalent in our Figma file.
                                        </p>

                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title>What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                                            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                                            components, whereas Tailwind UI offers sections of pages.
                                        </p>

                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title>What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                                            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                                            components, whereas Tailwind UI offers sections of pages.
                                        </p>

                                    </Accordion.Content>
                                </Accordion.Panel>
                            </Accordion>
                        </div>
                        <div className='flex-1 px-3'>
                            <div>
                                <img src="https://i.ibb.co/wBwWzWq/Capture.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactContent;