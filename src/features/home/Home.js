import React from 'react';
import { Box, Heading, List, Anchor, ResponsiveContext } from 'grommet';

const Home = () => {
    const size = React.useContext(ResponsiveContext);

    const route = [
        { name: <Anchor href="/" label="Home" /> },
        { name: <Anchor href="/about" label="About" /> },
        { name: <Anchor className="catch-me" href="/gg" label="CatchMe" /> }
    ];

    return (
        <Box fill className="home" align="center" justify="center" direction="column">
            <Heading className="home-title" color="light-grey-2">Redux et grommet website</Heading>
            <Box direction="row" gap="medium">
                {size === 'small' ?
                    <List className="home-menu-small" primaryKey="name" data={route}></List>
                :
                    <List className="home-menu" primaryKey="name" data={route}></List>
                }
            </Box>
        </Box>
    );
}

export default Home;