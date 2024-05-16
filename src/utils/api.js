import axios from "axios";

const API_KEY="7ea7d851";
// http://www.omdbapi.com/?i=tt3896198&apikey=7ea7d851

const BASE_URL="http://www.omdbapi.com/?";
export const fetchDataFromApi = async(url,params)=>{
    try{
        const {data}=await axios.get(`${BASE_URL}${url}&apikey=${API_KEY}`); 
        return data;
    }catch(err){
        console.log(err);
        return err;
    }
}
