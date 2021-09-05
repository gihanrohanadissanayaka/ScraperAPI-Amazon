import axios from 'axios';

class SearchProductService {
    getSearch(searchQuery) {
        const APIKey = sessionStorage.getItem('APIKey');
        return axios.get(`https://amzon-products-mura-developers.herokuapp.com/products/search/${searchQuery}/${APIKey}`)
    }
}

export default new SearchProductService();