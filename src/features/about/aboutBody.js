import React from 'react';
import { Box, ResponsiveContext } from 'grommet';

// components
import Informations from './components/Informations.js';
import Skills from './components/skills.js';
import Languages from './components/Langages.js';
import Exp from './components/exp.js';
import SocialNetwork from './components/socialNetwork.js';
import Formation from './components/formation.js';

const Body = () => {
    const size = React.useContext(ResponsiveContext);

    console.log(size) ;

    return (
        <>
            {size === 'small' ?
                <>
                    <Box direction="column" gap="small" pad="small">
                        <Informations color="light-red" size={size} />
                        <Skills color="light-blue" size={size} />
                        <Exp color="light-orange" size={size} />
                        <Formation color="light-purple" size={size} />
                    </Box>
                </>
            :
                <>
                    <Box direction="row-responsive" gap="small" pad="small">
                        <Informations color="light-red" size={size} />
                        <Skills color="light-blue" size={size} />
                        <Languages color="light-green" size={size} />
                    </Box>
                    <Box full height="fit-content" direction="row-responsive">
                        <Box width="20%"
                            direction="column"
                            gap="small"
                            pad="small">
                            <SocialNetwork color="light-purple" size={size} />
                        </Box>
                        <Box width="80%"
                            direction="column"
                            gap="small"
                            pad="small">
                            <Exp color="light-orange" size={size} />
                            <Formation color="light-purple" size={size} />
                        </Box>
                    </Box>
                </>
            }
        </>
    );
}

export default Body;