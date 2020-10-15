import React from 'react';
import { Box } from 'grommet';

// composants
import Info from './information/info.js';
import Comp from './competence/comp.js';

const Body = () => {
    return (
        <Box direction="row-responsive" gap="small" pad="small">
            <Info color="light-red" />
            <Comp color="light-blue" />
        </Box>
    );
}

export default Body;