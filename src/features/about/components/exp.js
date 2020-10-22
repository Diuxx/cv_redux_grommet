import React from 'react';
import { Box, Heading, Text } from 'grommet';

const Exp = (props) => {
    const [color, setColor] = React.useState(null);
    const [size, setSize] = React.useState(null);
    React.useEffect(() => {
        setColor(props.color);
        setSize(props.size);
    }, [props.color, props.size]);

    const expe = [
        { 
            title: 'Developpeur full stack',
            company: 'Université des antilles',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            time: '2 mois',
            years: '2016 - 2017'
        },
        {
            title: 'Developpeur mobile stagiaire',
            company: 'Forelite Engineering',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            time: '2 mois',
            years: '2017 - 2018'
        },
        {
            title: 'Developpeur full stack',
            company: 'Infotel conseil',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            time: '2 ans',
            years: '2019 - 2021'          
        }
    ]

    const view = (
        <Box direction="column" gap="small">
            {
                expe.map((elem, i) => {
                    return (
                        <Box key={i} direction="column">
                            <Box full direction="row" gap="small" >
                                <Heading margin="none" level="4" color="">
                                    {elem.title}
                                </Heading>
                                <Text color="">{elem.company}</Text>                  
                            </Box>
                            <Box full direction="row">
                                <Text>
                                    {elem.years} ({elem.time})
                                </Text>
                            </Box>
                            <Box full direction="row" pad={{"top": 'small'}}>
                                <Text>
                                    {elem.description}
                                </Text>
                            </Box>
                        </Box>
                    )
                })
            }
        </Box>
    )

    return (
        <>
            {size === 'small' ?
                <Box full className="exp"
                     border={{color: `${color}`, size: 'small', side: 'top'}}
                     height="large"
                     direction="column"
                     gap="small"
                     pad="small">
                    <Heading margin="none" level="3" color="gery-light-1">
                        Expériences professionnelles
                    </Heading>
                    {view}
                </Box>
                :
                <Box className="exp"
                     border={{color: `${color}`, size: 'small', side: 'top'}}
                     height="fit-content"
                     width="80%"
                     direction="column"
                     gap="small"
                     pad="small">
                    <Heading margin="none" level="3" color="gery-light-1">
                        Expériences professionnelles
                    </Heading>
                    {view}
                </Box>
            }
        </>);
}

export default Exp;