import React from 'react';
import { Box, ResponsiveContext } from 'grommet';

// composants
import Informations from './components/Informations.js';
import Skills from './components/skills.js';
import Languages from './components/Langages.js';

const Body = () => {
    const size = React.useContext(ResponsiveContext);

    return (
        <>
            {size === 'small' ?
                <Box direction="column" gap="small" pad="small">
                    <Informations color="light-red" size={size} />
                    <Skills color="light-blue" size={size} />
                    <Languages color="light-green" size={size} />
                </Box>
            :
                <Box direction="row-responsive" gap="small" pad="small">
                    <Informations color="light-red" size={size} />
                    <Skills color="light-blue" size={size} />
                    <Languages color="light-green" size={size} />
                </Box>
            }
        </>
    );
}

export default Body;