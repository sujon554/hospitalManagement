import React from 'react';
// import Header from '../../Shared/Header';
import Banner from '../Banner/Banner';
import Doctor from '../Doctor/Doctor';
import Tests from '../Tests/Tests';

const Home = () => {
    return (
        <div>
         
            <Banner></Banner>
            <Doctor />
            <Tests />
        </div>
    );
};

export default Home;