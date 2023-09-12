import React from 'react'

const Review = (props) => {
   

  return (
    <>
        <div className='box-container' id='box-containerthree'>
        <div className='data' id='data'>
           <img src={props.data.image}/>
           <h4>{props.data.reviews}</h4> 
            <div> <img src={props.data.userimage}/></div>
            <h2>{props.data.name}</h2>
           
            </div>
            <div className='star'><img id='star' src={props.data.stars}/></div>
        </div>
       
  </>
  )
}

export default Review