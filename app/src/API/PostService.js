import axios from 'axios';

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return res;
    }

    static async getByID(id) {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
        return res;
    }

    static async getCommentsByID(id) {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        return res;
    }
}