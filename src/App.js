import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Herosection from './component/Herosection';
import  SecondSection from './component/SecondSection';
import Card from './component/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Productcard from './component/Productcard';
import Review from './component/Review';
import Contact from './component/Contact';
function App() {
  const [state,setState]=useState([]);
  useEffect(()=>{

    axios.get("http://localhost:4000/path").then((res)=>{
      console.log(res.data);
      setState(res.data);
    })
  },[])

  const [item,setitem]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:4000/item").then((res)=>{
      console.log(res);
      setitem(res.data);
    })
    
  },[])

  const [review,setreview]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:4000/review").then((res)=>{
      console.log(res);
       setreview(res.data);
    })
  })

  return (
   <>
    <Navbar/>
    <Herosection/>
    <SecondSection/>
    {/* ============ */}
    <div className='bg'>
    <div className='heading' id='headline'>Our<span>Menu</span></div>
    <div className='box'>
    {state.map((value)=>{
      return(
        <Card data={value}/>
      )
    })}
    </div>
    </div>
    {/* ============ */}
    <div className='bg2'>
    <div className='heading' id='headline'>Our<span>item</span></div>
   <div className='box'>
   {item.map((value)=>{
    return( 
    <Productcard data={value}/>
    )
  })}
  </div>
  </div>
  {/* ======= */}
    <div className='bg3'>
    <div className='heading' id='headline'>Our<span>Reviews</span></div>
    <div className='box'>
   {review.map((value)=>{
    return(
    <Review data={value}/>
    )
   })}
-
   </div>
   
   </div>
   {/*  ============ */}
    <Contact/>
   </>
  );
}

export default App;
