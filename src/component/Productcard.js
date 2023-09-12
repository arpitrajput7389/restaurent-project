import React from 'react'

const Productcard = (props) => {
  return (
    <>
       <div className='box-container' id='box-containertwo'>
       <div><img src={props.data.image_url}/>
        <h3>{props.data.name}</h3>
        <div className='priceflex'>
        <h3>{props.data.list.map((prd)=>{
          return( 
          <li type="1">{prd.name}</li>
          )
        })}</h3>
        <h3>{props.data.list.map((p)=>{
          return(<div>{p.price}</div>)
        })}</h3>
        </div>
        </div>  
      </div>
    </>
  )
}

export default Productcard