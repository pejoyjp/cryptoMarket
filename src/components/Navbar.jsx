import React, { useState } from 'react';
import {
    Box,
    useMediaQuery,
    useTheme,
    ListItem,
    ListItemButton,
    ListItemText,
    List,
    ListItemIcon
} from '@mui/material'
import logo from '../images/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import PaidIcon from '@mui/icons-material/Paid';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link } from "react-router-dom";



function Navbar(props) {
    const [value, setValue] = useState(0)
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }


    return (
            <Box sx={{ maxWidth: 250, bgcolor: '#b39ddb',position:'sticky',minHeight:'100vh'}}>
                <List>
                    <Box marginLeft={'20px'}>
                        <img src={logo} alt='' width={130}/>
                    </Box>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/">
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/cryptocurrencies">
                            <ListItemIcon>
                                <BarChartIcon />
                            </ListItemIcon>
                            <ListItemText primary="Cryptocurrencies" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/exchanges">
                            <ListItemIcon>
                                <PaidIcon />
                            </ListItemIcon>
                            <ListItemText primary="Exchange" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/news">
                            <ListItemIcon>
                                <LightbulbIcon />
                            </ListItemIcon>
                            <ListItemText primary="News" />
                        </ListItemButton>
                    </ListItem>

                </List>
            </Box>



    );

}

export default Navbar;