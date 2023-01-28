import React from "react";
import "./style.css";
const MenuCard = ({ menuData }) => {

  return (
    <>
      <section className="main-card--cointainer html">
        {menuData.map((curElem) => {
          const {id,category,name,description,image}=curElem;
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-descripation subtle">
                    {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt='Image' className='card=media'/>
                  <span className="cards-tag ">order now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
