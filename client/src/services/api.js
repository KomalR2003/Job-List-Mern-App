import axios from 'axios';

const API_URL = "http://localhost:8000";

export const saveData = async (data) => {
    try{
        await axios.post(`${API_URL}/save`, data);
    }catch(error){
        console.error('error while calling save data api', error.message);
    }
}

export const getData = async () => {
    try{
       let res = await axios.get(`${API_URL}/get`);
       return res.data;
    }catch(error){
        console.error('error while calling save data api', error.message);
    }
}