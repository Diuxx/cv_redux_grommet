import React from 'react';
import { Box } from 'grommet';

// components
import Header from './aboutHeader';
import Body from './aboutBody';
 
const About = () => {
    return (
        <Box className="about">
            <Header />
            <Body />
        </Box>
    );
}

export default About;