import axios from "axios";

const BASE_URL="";
const TMDB_TOKEN=import.meta.env.VITE_APP_TMDB_TOKEN;

const headers={
    Authorization:"bearer "+TMDB_TOKEN,
};

export const fetchDataFromApi = async(url,params)=>{
    try{
        // const {data}=await axios.get(BASE_URL + url,{
        //     headers:headers,
        //     params:params
        // })
        const {data}=await axios.get(url) 
        return data;
    }catch(err){
        console.log(err);
        return err;
    }
}
