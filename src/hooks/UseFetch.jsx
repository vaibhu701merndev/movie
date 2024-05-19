import React from 'react'
import { useState,useEffect } from 'react';
import { fetchDataFromApi } from '../utils/api';

const UseFetch = (url) => {
     const [data,setData]=useState(null);
     const [loading,setLoading]=useState(null);
     const [err,setError]=useState(null);

     useEffect(()=>{
          setLoading("loading...");
          setData(null);
          setError(null);

          fetchDataFromApi(url)
          .then((res)=>{
               setData(res);
               setLoading(false);
          })
          .catch((err)=>{
               setLoading(false);
               setError(err);
          });
     },[url]);

     return {data,loading,err};
  
}

export default UseFetch;
