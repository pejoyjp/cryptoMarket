import React from 'react';
import {Box, Typography} from "@mui/material";

function Footer(props) {
    return (
        <Box bgcolor={'#b39ddb'}>
            <Typography textAlign={'center'} variant={'h5'} padding={'10px'} color={'white'}>
                Made By Jin | React
            </Typography>
        </Box>
    );
}

export default Footer;