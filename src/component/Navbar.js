import React, { useState } from 'react'
import Herosection from './Herosection'
function Navbar() {
const [openSearch, setOpenSearch] = useState(false)

  const search = () => {
    SetOpenClick(false)
    setOpenSearch(!openSearch)
   
  }

const[openClick,SetOpenClick]=useState(false)
const click=()=>{
  setOpenSearch(false)
  SetOpenClick(!openClick)
 
}
  return (
     <> 
   
        <header className='header' id='header'>
            <div className='logo'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-n_RWQAb-AwFWU0qTjLmrQUrojJJAJCT_xaG8ZwiC5WXmNVzfskgY-JuO-qoli5WGHCg&usqp=CAU' alt=''/></div>
            <div className='menubar'>
              <a href='#Home'>Home</a>
              <a href='#About'>About</a>
              <a href='#Menu'>Menu</a>
              <a href='#Items'>Items</a>
              <a href='#Review'>Review</a>
              <a href='#Contact'>Contact</a>
              <a href='#Blogs'>Blogs</a>
            </div>
            <div className='serach-Icon'>
              <div onClick={search}><i class="fa-solid fa-magnifying-glass"  ></i></div>
              <div><i class="fa-solid fa-cart-shopping"></i></div>
              <div onClick={click}><i class="fa-solid fa-bars"id='menubar-btn'></i></div>
            </div>  
            
        </header>
        {openSearch ? 
            <div className='search-form '>
              <input type='search' placeholder='search here...' id='search-box'>
              </input> 
            </div>  
             : ""}
             {openClick?
             <div className='menubars'>
              <a href='#Home'>Home</a>
              <a href='#About'>About</a>
              <a href='#Menu'>Menu</a>
              <a href='#Items'>Items</a>
              <a href='#Review'>Review</a>
              <a href='#Contact'>Contact</a>
              <a href='#Blogs'>Blogs</a>
            </div>  
            :""}
     </>
     
  )
}

export default Navbar;