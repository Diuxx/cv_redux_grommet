import React from 'react';
import { Box, Text } from 'grommet';
import { Gift, Car, Mail, Location } from 'grommet-icons';


const Info = (props) => {
    const [color, setColor] = React.useState(null);
    React.useEffect(() => {
        setColor(props.color);
    }, [props.color]);

    return (
        <Box border={{color: `${color}`, size: "small", side: "top"}} 
             height="small" width="20%"
             gap="small"
             direction="column"
             pad="small">
            <Box responsive="true"
                 direction="row-responsive" 
                 gap="large"
                 alignContent="start"
                 align="start">
                <Gift width="16px" height="16px" />
                <Text>26 ans</Text>
            </Box>
            <Box responsive="true"
                 direction="row-responsive" 
                 gap="large"
                 alignContent="start"
                 align="start">
                <Car width="16px" height="16px" />
                <Text>Permis B.</Text>
            </Box>
            <Box responsive="true"
                 direction="row-responsive" 
                 gap="large"
                 alignContent="start"
                 align="start">
                <Mail width="16px" height="16px"/>
                <Text>nicolasmarmot@gmail.com</Text>
            </Box>
            <Box responsive="true"
                 direction="row-responsive" 
                 gap="large"
                 alignContent="start"
                 align="start">
                <Location width="16px" height="16px"/>
                <Text>Blagnac, France</Text>
            </Box>
        </Box>
    );
}

export default Info;