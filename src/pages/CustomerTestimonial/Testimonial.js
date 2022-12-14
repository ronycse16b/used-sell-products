import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Test.css';

const Testimonial = () => {
    return (
        <div className='lg:py-20 bg-slate-200 '>
            <Carousel autoPlay={true} infiniteLoop={true} showArrows={false}>
                <div>
                    <section className="my-8 ">
                        <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                            <h1 className="text-4xl font-semibold leading-none text-center">What our customers are saying about used Bike BD</h1>
                        </div>
                        <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
                            <div className="flex flex-col items-center mx-12 lg:mx-0">
                                <div className="relative text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8  text-primary">
                                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                    </svg>
                                    <p className="px-6 py-1 text-lg italic"> Explore New Expriaance to buy used bike best site of 
                                    oto Morini must be congratulated for creating a tasteful sports tourer that offers the perfect mix of comfort, sportiness, tech and character</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 text-primary">
                                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                    </svg>
                                </div>
                                <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
                                <p>Leroy Jenkins</p>
                            </div>
                            <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
                                <div className="relative text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 text-primary">
                                        <path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                        <path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                    </svg>
                                    <p className="px-6 py-1 text-lg italic">Accusantium illum cupiditate harum asperiores iusto quos quasi quis quae! Fugit doloribus, voluptatum quidem magnam velit excepturi nobis, reprehenderit ducimus incidunt quisquam quae veritatis, quos iure harum.</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 text-primary">
                                        <path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                        <path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                    </svg>
                                </div>
                                <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
                                <p>Leroy Jenkins</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <section className="my-8">
                        <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                            <h1 className="text-4xl font-semibold leading-none text-center">What our customers are saying about us</h1>
                        </div>
                        <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
                            <div className="flex flex-col items-center mx-12 lg:mx-0">
                                <div className="relative text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 text-primary">
                                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                    </svg>
                                    <p className="px-6 py-1 text-lg italic">t isn???t perfect, but the Honda Hornet is an honest-to-goodness sports naked that offers big thrills for little money, just like the original.</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 text-primary">
                                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                    </svg>
                                </div>
                                <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
                                <p>Leroy Jenkins</p>
                            </div>
                            <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
                                <div className="relative text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 text-primary">
                                        <path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                        <path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                    </svg>
                                    <p className="px-6 py-1 text-lg italic">A noticeable step forward in ride quality when compared to the stock MT-10 ??? and better looking!</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 text-primary">
                                        <path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                        <path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                    </svg>
                                </div>
                                <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
                                <p>Leroy Jenkins</p>
                            </div>
                        </div>
                    </section>
                </div>
            
            </Carousel>
        </div>
    );
};

export default Testimonial;