import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="https://www.instagram.com/p/Cp_6ciljCht/?utm_source=ig_web_copy_link" alt="Phone_ads" />

        <div className="home__row">
            <Product id = "0987654321" title="OnePlus Nord CE 2 Lite 5G (Blue Tide, 6GB RAM, 128GB Storage)" price={1999} 
            images = "https://m.media-amazon.com/images/I/71AvQd3VzqL._SL1500_.jpg" rating={5} />
            <Product id ="0123456789" title="GownLink White Full Stitched with Layers Christian Wedding Catholic Wedding White Train Gown Wedding Dress in White Frock Women " price = {10000} 
            images = "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41bHzOh0SjL._UX679_.jpgg" rating = {4}/>
        </div>

        <div className="home__row">
            <Product id= "7894561230" title="Sherlock Holmes Series Complete Collection 7 Books Set by Arthur Conan Doyle" price = {399}
            images = "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51rvC3FJqkL._SX451_BO1,204,203,200_.jpg" rating={4}/>
            <Product id="0321654987" title="LEGO 60247 City Forest Fire Response Buggy with Firefighter - Multicolor" price= {2049}
            images = "https://m.media-amazon.com/images/I/81z0W9SxxAL._SL1500_.jpg" rating ={4}/>
            <Product id="0123654789" title= "Butterfly 8829 Timo Boll 2000 Wood Table Tennis Racket (Multicolour)" price={599}
            images = "https://m.media-amazon.com/images/I/71QiONXMHLL._SL1500_.jpg" rating ={5}/>
        </div>
        
        <div className="home__row">
            <Product id = "0147258369" title="Xbox One Series S+FIFA 23 | Standard Edition | Xbox One" price ={9999}
            images="https://m.media-amazon.com/images/I/812du5XqIFL._SL1500_.jpg" rating={5}/>
        </div>

      </div>
    </div>
  )
}

export default Home
