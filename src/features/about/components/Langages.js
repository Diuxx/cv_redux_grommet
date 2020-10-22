import React from 'react';
import { Box, Text, Heading } from 'grommet';

const Languages = (props) => {
    const [color, setColor] = React.useState(null);
    const [size, setSize] = React.useState(null);
    React.useEffect(() => {
        setColor(props.color);
        setSize(props.size);
    }, [props.color, props.size]);

    return (
        <>
            {size === 'small' ?
                <Box className="lang"
                     border={{color: `${color}`, size: 'small', side: "top"}}
                     height="small"
                     width="full"
                     direction="column"
                     gap="small"
                     pad="small">
                    <Box width="full">
                        <Heading margin="none" level="3" color="gery-light-1">
                            Langues
                        </Heading>
                    </Box>
                    <Box responsive="true"
                            direction="column"
                            alignContent="start"
                            align="start">
                        <Heading margin="none" level="4" color="light-black">
                            Anglais - professionnelle
                        </Heading>
                        <Text weight="bold">TOEIC EN COUR D'ACQUISITION</Text>
                    </Box>
                    <Box responsive="true"
                            direction="column"
                            alignContent="start"
                            align="start">
                        <Heading margin="none" level="4" color="light-black">
                            Coréen
                        </Heading>
                        <Text weight="bold">NIVEAU 0 EN COUR D'ACQUISITION</Text>
                    </Box>
                </Box> 
                :
                <Box className="lang"
                     border={{color: `${color}`, size: 'small', side: "top"}}
                     height="small"
                     width="20%"
                     direction="column"
                     gap="small"
                     pad="small">
                    <Box width="full">
                        <Heading margin="none" level="3" color="gery-light-1">
                            Langues
                        </Heading>
                    </Box>
                    <Box responsive="true"
                            direction="column"
                            alignContent="start"
                            align="start">
                        <Heading margin="none" level="4" color="light-black">
                            Anglais - professionnelle
                        </Heading>
                        <Text weight="bold">TOEIC EN COUR D'ACQUISITION</Text>
                    </Box>
                    <Box responsive="true"
                            direction="column"
                            alignContent="start"
                            align="start">
                        <Heading margin="none" level="4" color="light-black">
                            Coréen
                        </Heading>
                        <Text weight="bold">NIVEAU 0 EN COUR D'ACQUISITION</Text>
                    </Box>
                </Box>        
            }
        </>
    );
}

export default Languages;