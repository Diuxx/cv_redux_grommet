import React from 'react';
import { Box } from 'grommet';

const SocialNetwork = (props) => {
    const [color, setColor] = React.useState(null);
    const [size, setSize] = React.useState(null);
    React.useEffect(() => {
        setColor(props.color);
        setSize(props.size);
    }, [props.color, props.size]);

    return (
        <>
            {size === 'small' ?
                <Box>test</Box>
                :
                <Box className="exp"
                     border={{color: `${color}`, size: 'small', side: 'top'}}
                     height="small"
                     width="20%"
                     direction="column"
                     gap="small"
                     pad="small">
                    large
                </Box>
            }
        </>);
}

export default SocialNetwork;