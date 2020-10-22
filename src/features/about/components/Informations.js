import React from 'react';
import { Box, Text } from 'grommet';
import { Gift, Car, Mail, Location } from 'grommet-icons';


const Informations = (props) => {
    const [color, setColor] = React.useState(null);
    const [size, setSize] = React.useState(null);
    React.useEffect(() => {
        setColor(props.color);
        setSize(props.size);
    }, [props.color, props.size]);

    return ( 
        <>
            {size === 'small' ?
                <Box className="info"
                border={{color: `${color}`, size: 'small', side: "top"}} 
                height="small" width="full"
                gap="small"
                direction="row"
                pad="small">
                    <Box width="50%" direction="column" gap="large" justify="center">
                        <Box direction="row" justify="center" gap="small">
                            <Gift width="16px" height="16px" />
                            <Text>26 ans</Text>
                        </Box>
                        <Box direction="row" justify="center" gap="small">
                            <Car width="16px" height="16px" />
                            <Text>Permis B.</Text>
                        </Box>
                    </Box>
                    <Box width="50%" direction="column" gap="large" justify="center">
                        <Box direction="row" justify="center" gap="small">
                            <Mail width="16px" height="16px"/>
                            <Text className="mail">nicolasmarmot@gmail.com</Text>
                        </Box>
                        <Box direction="row" justify="center" gap="small">
                            <Location width="16px" height="16px"/>
                            <Text>Blagnac, France</Text>
                        </Box>
                    </Box>
                </Box>
                :
                <Box className="info"
                     border={{color: `${color}`, size: 'small', side: "top"}} 
                     height="small" width="20%"
                     gap="medium"
                     direction="column"
                     pad="small">
                    <Box direction="row-responsive" 
                         gap="large"
                         alignContent="start"
                         align="start">
                        <Gift width="16px" height="16px" />
                        <Text>26 ans</Text>
                    </Box>
                    <Box 
                        direction="row-responsive" 
                        gap="large"
                        alignContent="start"
                        align="start">
                        <Car width="16px" height="16px" />
                        <Text>Permis B.</Text>
                    </Box>
                    <Box 
                        direction="row-responsive" 
                        gap="large"
                        alignContent="start"
                        align="start">
                        <Mail width="16px" height="16px"/>
                        <Text className="mail">nicolasmarmot@gmail.com</Text>
                    </Box>
                    <Box 
                        direction="row-responsive" 
                        gap="large"
                        alignContent="start"
                        align="start">
                        <Location width="16px" height="16px"/>
                        <Text>Blagnac, France</Text>
                    </Box>
                </Box>
            }
        </>
    );
}

export default Informations;