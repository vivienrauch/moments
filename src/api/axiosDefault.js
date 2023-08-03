import axios from "axios";

axios.defaults.baseURL = 'https://drf-api-vmr-c9fd534dbc4b.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;
