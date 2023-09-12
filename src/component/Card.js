import React from 'react'
const Card = (props) => {
  
  return (
    <>
   
        <div className='box-container' id='box-containerone'>
       <div><img src={props.data.image_url}/>
        <h3>{props.data.food_name}</h3>
        <h3>{props.data.price}</h3>
        <button className='btn2'><a href='' className='btn2'/>Add to card</button></div>  
      </div>
      
    
    </>
  )
}

export default Card