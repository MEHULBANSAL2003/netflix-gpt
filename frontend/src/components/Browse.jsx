import React from 'react'
import {useSelector} from "react-redux";
import Header from './Header';
const Browse = () => {

  const items=useSelector((store)=>store.user);
  console.log(items);
  return (
    <div>
      <Header/>
      Browse 
       
    </div>
  )
}

export default Browse
