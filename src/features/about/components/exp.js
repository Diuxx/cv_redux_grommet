import React from 'react';
import { Box, Heading } from 'grommet';

const Exp = (props) => {
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
                     height="large"
                     width="80%"
                     direction="column"
                     gap="small"
                     pad="small">
                    <Box width="full">
                        <Heading margin="none" level="3" color="gery-light-1">
                            Expériences professionnelles
                        </Heading>
                    </Box>
                </Box>
            }
        </>);
}

export default Exp;