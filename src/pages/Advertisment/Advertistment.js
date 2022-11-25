import React from 'react';

const Advertistment = () => {
  return (
    <div className="hero lg:h-[500px]" style={{ backgroundImage: `url("https://i.ytimg.com/vi/pR3Qyw1mhgw/maxresdefault.jpg")`,backgroundAttachment:'fixed' }}>
      <div className="hero-overlay bg-opacity-75"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <div className="  py-14  justify-center">
            <h2 className="text-center text-6xl tracking-tighter font-bold text-primary">Up to
              <br className="sm:hidden" />  50% Off
            </h2>
            <div className="text-center py-2 lg:py-5">
              <span>Plus free shipping! Use code:</span>
              <span className="font-bold text-lg">MAMBA</span>
            </div>
            <button href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md text-white border block border-primary bg-primary dark:text-gray-900 dark:border-gray-400 ">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertistment;

