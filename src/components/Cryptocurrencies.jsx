import React, {useState,useEffect} from 'react';
import millify from "millify";
import {Link} from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import {useGetCryptosQuery} from "../services/cryptoApi";
import {Avatar, Box, Card, CardContent, CardHeader, Divider, Grid, Typography,TextField} from "@mui/material";

function Cryptocurrencies({simplified}) {
    const count = simplified ? 10:100
    const {data:cryptosList,isFetching}  = useGetCryptosQuery(count)
    const [cryptos,setCryptos] = useState([])
    const [searchTerm,setSearchTerm] = useState('')

    useEffect(()=>{
        const filterData = cryptosList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setCryptos(filterData)
    },[cryptosList,searchTerm])

    if(isFetching) return (<CircularProgress />)
    return (
        <Box>
            {
                !simplified && (
                    <Box margin={'5px'}>
                    <TextField label="Search" onChange={(e)=>setSearchTerm(e.target.value)} />
                    </Box>
                )
            }

            <Grid container spacing={2}>
                {
                    cryptos?.map((currency)=>(
                        <Grid item xs={6} sm = {4} md={3} key={currency.uuid}>
                            <Card sx={{margin:'5px',height:'250px'}} >
                                <CardHeader
                                    title={`${currency.rank}.  ${currency.name}`}
                                    avatar={
                                        <Avatar src={currency.iconUrl}>
                                        </Avatar>
                                    }
                                />
                                <Divider />
                                <CardContent>
                                    <Typography variant={'body1'} mb={1.5}>Price: {millify(currency.price)} $</Typography>
                                    <Typography variant={'body1'} mb={1.5}>Market Cap: {millify(currency.marketCap)} $</Typography>
                                    <Typography variant={'body1'} mb={1.5}>Daily Change: {millify(currency.change)} $</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}
export default Cryptocurrencies;