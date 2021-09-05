import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import useStyle from './ProductStyles';

const Product = ({ product }) => {
    const classes = useStyle();

    return (
        <>
            <Card>
                <CardMedia className={classes.media} image={product.image} title={product.name} />
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
                            {product.price_string}
                        </div>
                    </Typography>
                    <Typography variant="h6" >
                        <div className={classes.ratestyle}>
                            Rate : {product.stars}
                        </div>
                    </Typography>
                    <Typography variant="body2" color='textSecondary' >
                        <strong>Type</strong>: {product.type}
                    </Typography>
                </CardContent>
            </Card>

        </>

    );
}

export default Product;