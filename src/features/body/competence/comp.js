import React from 'react';
import { Box, Text, Meter } from 'grommet';

const Comp = (props) => {
    const [color, setColor] = React.useState(null);
    React.useEffect(() => {
        setColor(props.color);
    }, [props.color]);

    const competences = [
        {name: 'ReactJs', purcent: 10},
        {name: 'CSS', purcent: 40},
        {name: 'Angular', purcent: 90},
        {name: 'SQL', purcent: 65},
        {name: 'C#', purcent: 32},
        {name: 'C', purcent: 45},
        {name: 'TypeScript', purcent: 90},
        {name: 'Html', purcent: 90},
        {name: 'Test', purcent: 90},
        {name: 'Test', purcent: 90},
        {name: 'Test', purcent: 90},
    ]

    return (
        <Box border={{color:`${color}`, size:"small", side: "top"}}
             height="small" width="60%"
             gap="small"
             direction="row-responsive"
             wrap="true"
             pad="small">
            {
                competences.map((c, i) => (
                    <Box key={i} direction="row" pad="small" gap="small"
                         height="fit-content"
                         width="18%"
                         responsive="true">
                        <Text alignSelf="center">{c.name}</Text>
                        <Meter
                            size="32px"
                            thickness="4px"
                            alignSelf="center"
                            type="circle"
                            values={[{
                                color: "light-blue",
                                value: `${c.purcent}`,
                                label: `${c.name}`
                            }]}
                        />
                    </Box>
                    )
                )   
            }
        </Box>
    );
}

export default Comp;