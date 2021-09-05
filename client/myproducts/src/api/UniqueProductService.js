import axios from 'axios';

class SearchProductService {
    getProduct(productId) {
        const APIKey = sessionStorage.getItem('APIKey');
        return axios.get(`https://amzon-products-mura-developers.herokuapp.com/products/${productId}/${APIKey}`)
    }
}

export default new SearchProductService();