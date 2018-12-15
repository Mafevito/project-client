import axios from 'axios';

class _OrderService {
    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:3000/api',
            withCredentials: true
        });
    }

    newOrder = (emailOrder, tittleOrder, descriptionOrder, nameCompany, webCompany, socialCompany) => {
        return this.service.post('/new', {emailOrder, tittleOrder, descriptionOrder, nameCompany, webCompany, socialCompany})
          .then(response => response.data)
    }

    getSingleOrder = (id) => {
        return this.service.get(`/id/${id}`)
          .then(response => response.data)
    }

    getList = () => {
        return this.service.get('/orders')
          .then(response => response.data)
    }
}

const OrderService = new _OrderService();
export default OrderService;