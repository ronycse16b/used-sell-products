import React from 'react';
import Advertistment from '../Advertisment/Advertistment';
import Comments from '../AnyComments/Comments';
import Banner from '../Banner/Banner';
import Categories from '../Catagory/Categories';
import Testimonial from '../CustomerTestimonial/Testimonial';






const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Advertistment></Advertistment>
            <Categories></Categories>
            <Testimonial></Testimonial>


        </div>
    );
};

export default Home;