import React from 'react';
import { Box, Text, Heading } from 'grommet';

const Formation = (props) => {
    const [color, setColor] = React.useState(null);
    const [size, setSize] = React.useState(null);
    React.useEffect(() => {
        setColor(props.color);
        setSize(props.size);
    }, [props.color, props.size]);


    const formation = [
        {
            diploma: 'Mastère développement web',
            option: null,
            school: 'Ynov campus',
            zone: 'Toulouse, france',
            years: '2019 - 2021',
            descritpion: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.'
        },
        {
            diploma: 'Licence Pro Développement et Qualité des Logiciels (DQL)',
            option: null,
            school: 'Université Toulouse III - Paul Sabatier',
            zone: 'Toulouse, france',
            years: '2018 - 2019',
            descritpion: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.'
        },
        {
            diploma: 'BTS SIO - Services Informatiques aux Organisations',
            option: 'option - slam - Solutions Logicielles et Applications Métiers',
            school: 'Lycée Joseph Gaillard',
            zone: 'Fort de france, martinique',
            years: '2016 - 2018',
            descritpion: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.'
        }
    ]

    const view = (
        <Box direction="column" gap="small">
            {
                formation.map((elem, i) => {
                    return (
                        <Box key={i} direction="column">
                            <Box full direction="row" gap="small" >
                                <Heading margin="none" level="4" color="">
                                    {elem.diploma}
                                </Heading>
                                <Text color="light-grey-2">{elem.school}</Text> 
                            </Box>
                            <Box full direction="row">
                                <Text weight={490}>
                                    {elem.zone} ({elem.years})
                                </Text>
                            </Box>
                            <Box full direction="row" pad={{"top": 'small'}}>
                                <Text>
                                    {elem.descritpion}
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
            { size === 'small' ? 
                <Box className="lang"
                     border={{color: `${color}`, size: 'small', side: "top"}}
                     height="fit-content"
                     width="full"
                     direction="column"
                     gap="small"
                     pad="small">
                    <Heading margin="none" level="3" color="gery-light-1">
                        Diplômes et Formations
                    </Heading>
                    {view}
                </Box>
                :
                <Box full className="lang"
                     border={{color: `${color}`, size: 'small', side: "top"}}
                     height="fit-content"
                     direction="column"
                     gap="small"
                     pad="small">
                    <Heading margin="none" level="3" color="gery-light-1">
                        Diplômes et Formations
                    </Heading>
                    {view}
                </Box>
            }
        </>    
    )
}

export default Formation;