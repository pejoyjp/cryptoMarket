import React from 'react';
import {Box, Typography, Grid, Item, ListItem, Button, Divider} from "@mui/material";
import millify from "millify";
import {Link} from 'react-router-dom'
import {useGetCryptosQuery} from "../services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import CircularProgress from '@mui/material/CircularProgress';
function Homepage(props) {
    const{data,isFetching} = useGetCryptosQuery(10)
    const globalStats = data?.data?.stats
    if(isFetching)return <CircularProgress/>
    return (
        <Box width={'100%'} padding={'10px'} bgcolor={'#fafafa'} >
            <Typography variant={'h4'} >
                Global Crypto Stats
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography variant={'body1'} color="text.secondary">Total Cryptocurrencies</Typography>
                    <Typography variant={'h5'}>{millify(globalStats.total)}</Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography variant={'body1'} color="text.secondary">Total Exchanges</Typography>
                    <Typography variant={'h5'}>{millify(globalStats.totalExchanges)}</Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography variant={'body1'} color="text.secondary">Total Market Cap</Typography>
                    <Typography variant={'h5'}>{millify(globalStats.totalMarketCap)}</Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography variant={'body1'} color="text.secondary">Total 24 Volume</Typography>
                    <Typography variant={'h5'}>{millify(globalStats.total24hVolume)}</Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography variant={'body1'} color="text.secondary">Markets</Typography>
                    <Typography variant={'h5'}>{millify(globalStats.totalMarkets)}</Typography>
                </Grid>


            </Grid>


            <Grid container spacing={2} pt={'20px'}>
                <Grid item xs={10}>
                    <Typography variant={'h4'} >
                        Top 10 Cryptocurrencies in the world
                    </Typography>
                </Grid>

                <Grid item xs={2}>
                    <Button component={Link} to={"/cryptocurrencies"}>
                        <Typography>Show More</Typography>
                    </Button>
                </Grid>
            </Grid>
            <Cryptocurrencies simplified/>

            <Grid container spacing={2} pt={'20px'}>
                <Grid item xs={10}>
                    <Typography variant={'h4'} >
                        Latest Crypto News
                    </Typography>
                </Grid>

                <Grid item xs={2}>
                    <Button component={Link} to={"/news"}>
                        <Typography>Show More</Typography>
                    </Button>
                </Grid>
            </Grid>


        </Box>
    );
}

export default Homepage;