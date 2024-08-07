import axios from 'axios';

export const fetchArticles = async () => {
    const response = await axios.get('http://localhost:5000/api/articles');
    return response.data;
};
