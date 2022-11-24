import React from 'react';

const Slider = () => {
    return (
        <>
            <div className="carousel w-full mt-10 p-10 ">
                <div id="item1" className="carousel-item w-full relative md:h-72 lg:h-[600px] h-48  ">

                    <div className=' flex items-center  w-full   '>
                        <div className='lg:w-2/5  md:pl-24 hidden md:block lg:block md:w-1/2'>
                            <h1 className='lg:text-4xl font-bold'>YAHAMAHA FZ4</h1>
                            <p className='lg:text-2xl mt-5 mb-10'>The FZ1 is powered by inline-four 998cc liquid cooled engine borrowed from the previous generation YZF-R1.The bike with its aggressive look screams brilliant road presence and is one of the practical bikes one can buy in Used Bike BD</p>

                            <button className='btn btn-primary '>Book Now</button>
                        </div>
                        <div className='lg:w-3/5 w-full md:w-1/2'>
                            <img src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/111153/fz-s-left-rear-three-quarter.jpeg?isig=0&q=80" className="w-full object-cover" />
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full relative md:h-72 lg:h-[600px] h-48 ">
                    <div className=' flex items-center  w-full   '>
                        <div className='lg:w-2/5  md:pl-24 hidden md:block lg:block md:w-1/2'>
                            <h1 className='lg:text-4xl font-bold'> Suzuki Gixxer- All You Need To Know</h1>
                            <p className='lg:text-2xl mt-5 mb-10'>The 2018 version of Suzuki Gixxer gets it all for a 150cc bike. It is good looking, has good handling and riding capability. The Gixxer sports a 155cc SOHC engine, that also runs in the Gixxer  buy in Used Bike BD</p>

                            <button className='btn btn-primary '>Book Now</button>
                        </div>
                        <div className='lg:w-3/5 w-full md:w-1/2'>
                            <img src="https://www.carblogindia.com/wp-content/uploads/2017/03/2017-suzuki-gixxer-3-1024x767.jpg" className="w-fit" />
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full relative md:h-72 lg:h-[600px] h-48 ">
                    <div className=' flex items-center  w-full   '>
                        <div className='lg:w-2/5  md:pl-24 hidden md:block lg:block md:w-1/2'>
                            <h1 className='lg:text-4xl font-bold'> Honda X-Blade</h1>
                            <p className='lg:text-2xl mt-5 mb-10'>Honda X-Blade is a street bike available at a starting price of Rs. 1,15,759 in India. It is available in 2 variants and 4 colours with top variant price starting from Rs. 1,20,681. The Honda X-Blade is powered by 162.71cc BS6 engine which develops a power of 13.67 bhp  buy in Used Bike BD</p>

                            <button className='btn btn-primary '>Book Now</button>
                        </div>
                        <div className='lg:w-3/5 w-full md:w-1/2'>
                            <img src="https://media.zigcdn.com/media/content/2020/Jul/xblade-ayntk-zig.jpg" className="w-[80%] h-[80%]" />
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full relative md:h-72 lg:h-[600px] h-48 ">
                    <div className=' flex items-center  w-full   '>
                        <div className='lg:w-2/5   md:pl-24 hidden  md:block lg:block md:w-1/2'>
                            <h1 className='lg:text-4xl font-bold'>YAHAMAHA FZ4</h1>
                            <p className='lg:text-2xl mt-5 mb-10'>The FZ1 is powered by inline-four 998cc liquid cooled engine borrowed from the previous generation YZF-R1.The bike with its aggressive look screams brilliant road presence and is one of the practical bikes one can buy in Used Bike BD</p>

                            <button className='btn btn-primary '>Book Now</button>
                        </div>
                        <div className='lg:w-3/5 w-full md:w-1/2'>
                            <img src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/111153/fz-s-left-rear-three-quarter.jpeg?isig=0&q=80" className=" w-full object-cover " />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2  gap-2">
                <a href="#item1" className="btn btn-xs lg:btn-primary rounded-full">1</a>
                <a href="#item2" className="btn btn-xs lg:btn-primary rounded-full">2</a>
                <a href="#item3" className="btn btn-xs lg:btn-primary rounded-full">3</a>
                <a href="#item4" className="btn btn-xs lg:btn-primary rounded-full">4</a>
            </div>

        </>
    );
};

export default Slider;