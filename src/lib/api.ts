import {create} from 'axios'

const api = create({
    baseURL: "https://jsonplaceholder.typicode.com"
    
})

export default api;
