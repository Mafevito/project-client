import axios from 'axios';

class _AuthService {
    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:3000/api',
            withCredentials: true
        });
    }

    signup = (firstName, lastName, email, username, password) => {
        return this.service.post('/signup', {firstName, lastName, email, username, password})
        .then(response => response.data)
    }

    login = (username, password) => {
        return this.service.post('/login', {username, password})
        .then(response => response.data)
    }

    loggedin = () => {
        return this.service.get('/currentuser')
        .then(response => response.data)
    }

    logout = () => {
        return this.service.get('/logout')
        .then(response => response.data)
    }

    find = (user) => {
        return this.service.post('/find', { username: user })
        .then(response => response.data)
    }
}

const AuthService = new _AuthService();
export default AuthService;