import React from 'react';
import { Text, Box, Avatar, Heading } from 'grommet';

// import profile image
import profile from './../../imgs/0.jpg';

const Header = () => {
    return (
        <Box direction="column" gap="small" align="center" pad="small" background="grey-light">
            <Box direction="row" gap="medium">
                <Avatar size="xlarge" src={ profile } />  
            </Box>
            <Heading margin="none" level="2">Hi ! I am Nicolas</Heading>
            <Text>
                Alternant développeur full stack chez Infotel.
            </Text>
            <Text>
                Je suis à la recherche de défis toujours plus intéressant à résoudre !
            </Text>
        </Box>
    );
}

export default Header;