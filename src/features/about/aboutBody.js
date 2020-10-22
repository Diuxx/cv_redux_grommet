import React from 'react';
import { Box, ResponsiveContext } from 'grommet';

// components
import Informations from './components/Informations.js';
import Skills from './components/skills.js';
import Languages from './components/Langages.js';
import Exp from './components/exp.js';
import SocialNetwork from './components/socialNetwork.js';

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
                <>
                    <Box direction="row-responsive" gap="small" pad="small">
                        <Informations color="light-red" size={size} />
                        <Skills color="light-blue" size={size} />
                        <Languages color="light-green" size={size} />
                        
                    </Box>
                    <Box direction="row-responsive" gap="small" pad="small">
                        <SocialNetwork color="light-purple" size={size} />
                        <Exp color="light-orange" size={size} />
                    </Box>
                </>
            }
        </>
    );
}

export default Body;