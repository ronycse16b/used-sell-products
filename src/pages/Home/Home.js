import React from 'react';
import Advertistment from '../Advertisment/Advertistment';
import Banner from '../Banner/Banner';
import Categories from '../Catagory/Categories';
import Slider from '../HomeSlider/Slider';




const Home = () => {

    return (
        <div>
           <Banner></Banner>
           <Advertistment></Advertistment>
           <Categories></Categories>
        
        </div>
    );
};

export default Home;