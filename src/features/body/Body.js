import React from 'react';
import { Box, ResponsiveContext } from 'grommet';

// composants
import Info from './information/info.js';
import Comp from './competence/comp.js';

const Body = () => {
    const size = React.useContext(ResponsiveContext);

    return (
        <>
            {size === 'small' ?
                <Box direction="column" gap="small" pad="small">
                    <Info color="light-red" size={size} />
                    <Comp color="light-blue" size={size} />
                </Box>
            :
                <Box direction="row-responsive" gap="small" pad="small">
                    <Info color="light-red" size={size} />
                    <Comp color="light-blue" size={size} />
                </Box>
            }
        </>
    );
}

export default Body;