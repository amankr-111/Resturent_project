import React from "react";
import "./style.css";
import MenuCard from "./MenuCard";
import { useState } from "react";
import Menu from './MenuApi';
import Navbar from "./Navbar";

  const uniqueData=[...new Set(Menu.map((curElem)=>{
    return curElem.category;
  })),'All',

]
console.log(uniqueData)

const Resturent = () => {
  const[menuData,setMenuData]=useState(Menu)
  const[menuList, setmenuList]=useState(uniqueData)
  const filterItem = (category) => {
    if(category==='All'){
      setMenuData(Menu)
      return;
    }
    const updatedList=Menu.filter((cerElem)=>{
      return cerElem.category===category;
    })
    setMenuData(updatedList)
  };
  return (
    <>
    
   <Navbar filterItem={filterItem} menuList={menuList}/>
    <MenuCard menuData={menuData}/>
  </>
  );
};

export default Resturent;
