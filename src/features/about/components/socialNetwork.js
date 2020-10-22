import React from 'react';
import { Box, Heading, Anchor } from 'grommet';
import { FacebookOption, LinkedinOption } from 'grommet-icons';

const SocialNetwork = (props) => {
    const [color, setColor] = React.useState(null);
    const [size, setSize] = React.useState(null);
    React.useEffect(() => {
        setColor(props.color);
        setSize(props.size);
    }, [props.color, props.size]);

    const network = [
        {
            name: 'nicolas marmot',
            url: <Anchor href="https://www.facebook.com/nicolas.marmot" label="nicolas marmot" />,
            icon: <FacebookOption color={color} width="16px" height="16px" />
        },
        {
            name: '@nicolasMarmot',
            url: <Anchor href="https://www.linkedin.com/in/nicolas-marmot-317171161/" label="@nicolasMarmot" />,
            icon: <LinkedinOption color={color} width="16px" height="16px" />
        }
    ]

    return (
        <>
            {size === 'small' ?
                <Box>test</Box>
                :
                <Box full className="network"
                     border={{color: `${color}`, size: 'small', side: 'top'}}
                     height="small"
                     direction="column"
                     gap="small"
                     pad="small">
                    <Heading margin="none" level="3" color="gery-light-1">
                        Réseaux sociaux
                    </Heading>
                    {
                        network.map((elem, i) => {
                            return (
                                <Box key={i} direction="row" gap='small'>
                                    {elem.icon} {elem.url}
                                </Box>
                            )
                        })
                    }
                </Box>
            }
        </>);
}

export default SocialNetwork;