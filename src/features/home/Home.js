import React from 'react';
import { Box } from 'grommet';

// components
import Header from '../header/Header.js';
import Body from '../body/Body.js';
import Footer from '../footer/Footer.js';
 
const Home = () => {
    return (
        <Box className="home">
            <Header />
            <Body />
            <Footer />
        </Box>
    );
}

export default Home;