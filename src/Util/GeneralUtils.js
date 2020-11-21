import CryptoJS from "crypto-js";
import axios from 'axios';

function sendRequest(url, method, data){
    let sendingData = CryptoJS.AES.encrypt(JSON.stringify(data), process.env.REACT_APP_SECRET).toString();

    return axios({
        method: method,
        url: `http://${process.env.REACT_APP_BACKEND}:${process.env.REACT_APP_BACKEND_PORT}/api${url}`,
        data: data? {data: sendingData}: '',
        headers: {'Authorization': localStorage.getItem('token')},
    })
}

function decrypt(data){
    const bytes = CryptoJS.AES.decrypt(data, process.env.REACT_APP_SECRET);
    const payload = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return payload
}


export {sendRequest, decrypt};