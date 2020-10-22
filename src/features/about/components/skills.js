import React from 'react';
import { Box, Text, Meter, Heading } from 'grommet';

const Skills = (props) => {
    const [color, setColor] = React.useState(null);
    const [size, setSize] = React.useState(null);
    React.useEffect(() => {
        setColor(props.color);
        setSize(props.size);
    }, [props.color, props.size]);


    const skills = {
        front: [
            { name: 'Angular', purcent: 65},
            { name: 'ReactJs', purcent: 5},
            { name: 'Vue', purcent: 1},
            { name: 'Bootstrap', purcent: 56}  
        ],
        back: [
            {name: 'Asp.net webapi', purcent: 43},
            {name: 'sequelize', purcent: 30},
            {name: 'nodeJs', purcent: 67}
        ],
        framwork: [
            {name: 'Laravel', purcent: 20},
            {name: 'jQuery', purcent: 70},
            {name: 'Symfony', purcent: 10}
        ]
    }


    const view = [
        (
            skills.front.map((element, i) => (
                <Box key={i} direction="row" height="fit-content" width="fit-content" justify="between" gap="medium">
                    <Text alignSelf="center">{element.name}</Text>
                    <Meter
                        size="32px"
                        thickness="4px"
                        alignSelf="center"
                        type="circle"
                        values={[{
                            color: 'light-green',
                            value: Number(element.purcent),
                            label: element.name
                        }]}
                    />
                </Box>
            ))
        ),
        (
            skills.back.map((element, i) => (
                <Box key={i} direction="row" height="fit-content" width="fit-content" justify="between" gap="medium">
                    <Text alignSelf="center">{element.name}</Text>
                    <Meter
                        size="32px"
                        thickness="4px"
                        alignSelf="center"
                        type="circle"
                        values={[{
                            color: "light-yellow",
                            value: Number(element.purcent),
                            label: element.name
                        }]}
                    />
                </Box>
            ))
        ),
        (
            skills.framwork.map((element, i) => (
                <Box key={i} direction="row" height="fit-content" width="fit-content" justify="between" gap="medium">
                    <Text alignSelf="center">{element.name}</Text>
                    <Meter
                        size="32px"
                        thickness="4px"
                        alignSelf="center"
                        type="circle"
                        values={[{
                            color: "light-blue",
                            value: Number(element.purcent),
                            label: element.name
                        }]}
                    />
                </Box>
            ))
        )
    ]

    return (
        <>
            {size === 'small' ?
                <Box border={{color:`${color}`, size:"small", side: "top"}}
                     height="small" width="full"
                     gap="small"
                     direction="column"
                     pad="small">
                    <Box width="full">
                        <Heading margin="none" level="3" color="gery-light-1">Compétences</Heading>
                    </Box>
                    {
                        view.map((elem, i) => {
                            return (
                                <Box key={i} flex="grow" direction="row" height="fit-content" justify="between">
                                    {elem}
                                </Box>
                            )
                        })
                    }
                </Box>             
            :
                <Box border={{color:`${color}`, size:"small", side: "top"}}
                     height="small" width="60%"
                     gap="small"
                     direction="column"
                     pad="small">
                    <Box width="full">
                        <Heading margin="none" level="3" color="gery-light-1">Compétences</Heading>
                    </Box>
                    {
                        view.map((elem, i) => (
                            <Box key={i} flex="grow" direction="row" height="fit-content" justify="between">
                                {elem}
                            </Box>
                        ))
                    }
                </Box>      
            }

        </>
    );
}

export default Skills;