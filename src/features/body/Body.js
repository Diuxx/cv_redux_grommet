import React from 'react';
import { Box } from 'grommet';

// composants
import Info from './information/info.js';

const Body = () => {
    return (
        <Box direction="row-responsive" gap="small" pad="small">
            <Info color="#FF5733" />
            <Info color="#2ECC71" />
            <Info color="#3498DB" />
        </Box>
    );
}

export default Body;