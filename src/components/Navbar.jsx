import React from 'react'
import "./style.css";
const Navbar = ({filterItem, menuList}) => {
    
  return (
   <> 
      
    <nav className=' nav main-card--cointainer html'>
 
    <div className='btn-group'>
        {
            menuList.map((curElem)=>{
                return(
                    <button className='btn-group__item' onClick={()=>filterItem(curElem)}>{curElem}</button>
                )
            })
        } 
    </div>
</nav>

</>
  )
}

export default Navbar