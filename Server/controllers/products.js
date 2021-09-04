import request from 'request-promise';

const generateScraperURL = (apiKey) => `https://api.scraperapi.com?api_key=${apiKey}&autoparse=true`

export const getProduct = async ( req, res ) => {
    const  productId  = req.params.productId;
    const  api_key  = req.params.apiKey;

    try {
        const response = await request(`${generateScraperURL(api_key)}&url=https://www.amazon.com/dp/${productId}`);
        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);
    }
}

export const getProductReviews = async( req, res ) => {
    const  productId  = req.params.productId;
    const  api_key  = req.params.apiKey;

    try {
        const response = await request(`${generateScraperURL(api_key)}&url=https://www.amazon.com/product-reviews/${productId}`);
        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);
    }
}

export const getProductOffers = async( req, res ) => {
    const  productId  = req.params.productId;
    const  api_key  = req.params.apiKey;

    try {
        const response = await request(`${generateScraperURL(api_key)}&url=https://www.amazon.com/gp/offer-listing/${productId}`);
        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);
    }
}

export const getProductBySearch = async( req, res ) => {
    const  searchQuery  = req.params.searchQuery;
    const  api_key  = req.params.apiKey;
    try {
        const response = await request(`${generateScraperURL(api_key)}&url=https://www.amazon.com/s?k=${searchQuery}`);
        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);
    }
}