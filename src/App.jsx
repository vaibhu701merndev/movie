import { useState,useEffect } from 'react'
import {fetchDataFromApi} from './utils/api';

import { useSelector,useDispatch } from 'react-redux';
import {  getApiConfiguration } from "./store/homeSlice";


function App() {
  const dispatch = useDispatch();
  const {url} =useSelector((state)=>state.home);

  useEffect(()=>{
    apiTesting();
  },[])

  const apiTesting=()=>{
    fetchDataFromApi("http://localhost:3000/0")
    .then((res)=>{
      dispatch(getApiConfiguration(res));
    })
    .catch((err)=>console.log(err))
  }
  
  return (
    <div className='App'>
      App {url?.title}
    </div>
  )
}

export default App
