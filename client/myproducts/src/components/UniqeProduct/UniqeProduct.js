import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReplyOutlined } from '@material-ui/icons';
import { Grid, IconButton, CircularProgress, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import useStyle from './Styles';
import UniqueProductService from '../../api/UniqueProductService';

const UniqueProduct = () => {
    const classes = useStyle();
    const [product, setProduct] = useState([]);
    const params = useParams();

    useEffect(() => {
        handleUniqueProduct();
    }, []);

    const handleUniqueProduct = () => {
        UniqueProductService.getProduct(params.productId)
            .then(
                responce => {
                    //console.log(responce)
                    setProduct(responce.data)
                })
            .catch(error => {
                console.log(error)
                setProduct('no items');
            })
    }
    if(product.name === "StatusCodeError" ) 
    return ( <div>
        <main className={classes.content}>
        <div className={classes.toolbar} />
        Sorry, Error Product searching...
        </main>
    </div>)
    return (
        <div>
           {

(product.length !== 0 ) ?
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <IconButton aria-label='more item...' component={Link} to="/" >
            <ReplyOutlined />
        </IconButton>
        <Grid container justify="center" spacing={4}>
        <Grid item key={product.id} xs={12} sm={6} md={6} lg={6} >

        <Card>
        
            {product.images.slice(0,3).map((image) => 
                <Grid container justify="center" spacing={4}>
                <Grid item key={product.id} xs={12} sm={6} md={6} lg={6} >
                <CardMedia className={classes.media} image={image} title={product.name} />
                </Grid>
                </Grid>
            )}
                <CardContent>
                    <div className={classes.cardContent} >
                        <Typography gutterBottom>
                            <div className={classes.namestyle}>
                                {product.name}
                            </div>
                        </Typography>

                    </div>
                    <Typography variant="h6" >
                        <div className={classes.pricestyle}>
                            {product.pricing}
                        </div>
                    </Typography>
                    <Typography variant="h6" >
                        <div className={classes.ratestyle}>
                            Rate : {product.average_rating}
                        </div>
                    </Typography>
                    <Typography variant="body2" color='textSecondary' >
                        <strong>Type</strong>: {product.brand}
                    </Typography>
                    <Typography variant="body2" color='textSecondary' >
                        <strong>Description</strong>
                    </Typography>
                    <Typography variant="body2" color='textSecondary' >
                        {product.small_description}
                    </Typography>
                </CardContent>
            </Card>
            </Grid>
        </Grid>
    </main>
    :
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <CircularProgress />
    </main>

}
        </div>
    );

}

export default UniqueProduct;