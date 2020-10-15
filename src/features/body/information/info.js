import React from 'react';
import { Box, Text } from 'grommet';

const Info = (props) => {
    const [color, setColor] = React.useState(null);
    React.useEffect(() => {
        setColor(props.color);
    }, [props.color]);

    return (
        <Box 
            border={{color: `${color}`, size: "small", side: "top"}} 
            height="small" width="33%">
            <Text>My personal information or not but i think that width is fiting content</Text>
        </Box>
    );
}

export default Info;