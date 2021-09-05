import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ExpandMore, ReplyOutlined } from '@material-ui/icons';
import { Grid, IconButton, CircularProgress } from '@material-ui/core';
import Product from './product/Product';
import useStyle from './ProductsStyles';
import SearchProductsService from '../../api/SearchProductsService';

const Products = () => {
    const classes = useStyle();
    const [visible, setVisible] = useState(17);
    const [products, setProducts] = useState([]);
    const params = useParams();

    useEffect(() => {
        handleSearch();
    }, []);

    const handleSearch = () => {
        SearchProductsService.getSearch(params.searchQuery)
            .then(
                responce => {
                    //console.log(responce)
                    setProducts(responce.data.results)
                })
            .catch(error => {
                setProducts([]);
            })
    }
    if(products.name === "StatusCodeError" ) 
    return ( <div>
        <main className={classes.content}>
        <div className={classes.toolbar} />
        Sorry, Error Product searching...
        </main>
    </div>)

    return (
        <div>
            {

                (products.length !== 0 ) ?
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <IconButton aria-label='more item...' component={Link} to="/" >
                            <ReplyOutlined />
                        </IconButton>
                        <Grid container justify="center" spacing={4}>
                            {products.slice(0,visible).map((product) => 
                                <Grid item key={product.id} xs={6} sm={3} md={3} lg={2}>
                                <Product product={product}/>
                                </Grid>
                            )}
                         
                        </Grid>

                        <Grid container justify='center' >
                            <IconButton aria-label='more item...' onClick={() => setVisible(visible + 20)}>
                                <ExpandMore />
                            </IconButton>
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

export default Products;