import React from 'react'

const Contact = () => {
  return (
    <>
        <div className='heading' id='headline'>CONTACT<span>US</span></div>
        <div className='map-contact'>
           <div>
        <img src='https://localsearchforum.com/attachments/maps-embed-api-example-png.3469/'/>
         </div>
         <form>
            <h3>Get in Touch</h3>
            <div className='inputBox'>
                <span><i class="fa-solid fa-user"></i></span>
                <input type='text'placeholder='name'></input>
            </div>
            <div className='inputBox'>
                <span><i class="fa-solid fa-envelope"></i></span>
                <input type='email'placeholder='Email'></input>
            </div>
            <div className='inputBox'>
                <span><i class="fa-solid fa-phone"></i></span>
                <input type='number'placeholder='Number'></input>
            </div>
            <input type='submit' value="Contact Now" className='btn3'></input>
         </form>   
        </div>
    </>
  )
}

export default Contact