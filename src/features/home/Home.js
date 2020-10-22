import React from 'react';
import { Box, Heading, List, Anchor, ResponsiveContext, Button } from 'grommet';

// translate
import { withTranslate, IntlActions, useTranslate } from 'react-redux-multilingual'


const Home = ({ translate }) => {
    const size = React.useContext(ResponsiveContext);
    const defaultLocale = localStorage.getItem('defaultLocale') ;

    const route = [
        { name: <Anchor href="/" label="Home" /> },
        { name: <Anchor href="/about" label="About" /> },
        { name: <Anchor className="catch-me" href="/gg" label="CatchMe" /> }
    ];

    return (
        <>
            <Box className="translate"
                 direction="row"
                 width="fit-content"
                 height="fit-content"
                 gap="small">
                <Button color="light-grey-2" label="FR" />
                <Button color="light-grey-2" label="EN" />
            </Box>
            <Box fill className="home" align="center" justify="center" direction="column">
                <Heading className="home-title" color="light-grey-2">{ translate('app_title') }</Heading>
                <Box direction="row" gap="medium">
                    {size === 'small' ?
                        <List className="home-menu-small" primaryKey="name" data={route}></List>
                    :
                        <List className="home-menu" primaryKey="name" data={route}></List>
                    }
                </Box>
            </Box>
        </>
    );
}

export default withTranslate(Home);