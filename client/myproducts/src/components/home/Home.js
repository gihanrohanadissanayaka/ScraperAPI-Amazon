import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LocalMallOutlined, InsertEmoticon, Search, CallOutlined, Facebook, GitHub, LinkedIn } from '@material-ui/icons';
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core';
import useStyle from './HomeStyles';
import logo from '../../assets/market.jpg';
import Amazon from '../../assets/amazon.png';
import ProductImage from '../../assets/uniqueproduct.png';
import Profile from '../../assets/profile.jfif';

const Home = () => {
    const classes = useStyle();
    const [searchQuery, setSearchQuery] = useState('amazon best');
    const [productId, setProductId ] = useState('B07743412C');
    const history = useHistory();

    const handleSearch = () => {
        const APIKey = sessionStorage.getItem('APIKey');
        if(APIKey) {history.push(`/products/search/${searchQuery}`);}
        else
        {alert('ENTER API Key!');}
    }

    const handleProduct = () => {
        const APIKey = sessionStorage.getItem('APIKey');
        if(APIKey) {history.push(`/products/${productId}`);}
        else
        {alert('ENTER API Key!');}
    }
    return (
        <>
            <div style={{ backgroundColor: 'White' }}>
                <div className={classes.upper}>
                </div>
                <Container>
                    <Grid container justify="center">
                        <Grid item xs={12} sm={6}>
                            <div style={{ marginTop: '20%' }}>
                                <Typography className={classes.maintitle}>My Online Store</Typography>
                                <Typography className={classes.subtitle}>Your best online shopping experience</Typography><br />
                                <TextField id="outlined-basic" label="Search items" variant="outlined" fullWidth name='searchQuery' type='text' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                                <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="secondary" onClick={handleSearch}>Search <LocalMallOutlined /></Button>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <img src={logo} alt="MyStore" width='100%' height='100%' className={classes.image} />
                        </Grid>
                        <br /><br />
                    </Grid>
                    
                    <Grid container justify="center">
                        <Grid item xs={12} sm={6}>
                            <img src={ProductImage} alt="MyStore" width='100%' height='100%' className={classes.image} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div style={{ marginTop: '20%' }}>
                                <Typography className={classes.maintitle}>Search Products by ID</Typography>
                                <Typography className={classes.subtitle}>Enter AMAZON Product ID here</Typography><br />
                                <TextField id="outlined-basic" label="Search items" variant="outlined" fullWidth name='productId' type='text' value={productId} onChange={(e) => setProductId(e.target.value)} />
                                <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary" onClick={handleProduct}>Product <Search /></Button>
                                <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary" disabled>Reviews <Search /></Button>
                                <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary" disabled>Offers <Search /></Button>
                            </div>
                        </Grid>
                        <br /><br />
                    </Grid>
                    <br />
                    <Grid container justify="center">
                        <Typography variant='h4' style={{ color: 'DimGrey' }}><InsertEmoticon /></Typography>
                    </Grid>
                    <Grid container justify="center" spacing={4}>
                        <Grid item xs={12} sm={6} md={6} lg={4}>
                            <div>
                                <p>Here we connect react client side product searching application with API service host from heroku.Express(Node.js) based API part build to fetch data from AMAZON products in realtime.Here we use ScraperAPI service to connect our API with amazon and all https request binding with specific API_key comming from scraper.Otherwise heroku API open for any cross origins.</p>
                                <img src={Profile} alt="MyStore" width='10%' height='auto' />
                                <p>GIHAN DISSANAYAKA</p>
                                <a href="tel:+94711651378"><CallOutlined />   </a><a href="https://web.facebook.com/profile.php?id=100004284887135" target="_blank" rel="noreferrer"><Facebook />   </a><a href="https://github.com/gihanrohanadissanayaka" target="_blank" rel="noreferrer"><GitHub /></a> <a href="https://www.linkedin.com/in/gihan-dissanayaka-9947b3216/" target="_blank" rel="noreferrer"><LinkedIn /></a>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4}>
                        <img src={Amazon} alt="MyStore" width='60%' height='60%' className={classes.image} />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    )
}

export default Home;