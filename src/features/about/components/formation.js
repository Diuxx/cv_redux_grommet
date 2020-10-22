import React from 'react';
import { Box, Text, Heading } from 'grommet';

const Formation = (props) => {
    const [color, setColor] = React.useState(null);
    const [size, setSize] = React.useState(null);
    React.useEffect(() => {
        setColor(props.color);
        setSize(props.size);
    }, [props.color, props.size]);

    return (
        <>
            { size === 'small' ? 
                <Box>test</Box>
                :
                <Box>test</Box>
            }
        </>    
    )
}

export default Formation;