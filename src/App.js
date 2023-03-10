import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';


/** 
       Header
          - Logo
          - Navbar (Right Side)
          - Cart
       Body
          - Search Bar
          - RestrauntList
          - RestaurantCard
                 - Image
                 - Name
                 - Rating
                 - Cusines
       Footer 
          - Links
          - Copyrights
          
*/



const burgerKing = {
    name : "Burger King",
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/7bb739d7f6ae8b4ce8ed590765dffd2f",
    cusines: ["Burger","American"],
    rating: "4.2"
}

const RestaurantCard = () => {
    return(
       <div className='card'>
        <img src={burgerKing.image}/>
        <h2>{burgerKing.name}</h2>
        <h3>{burgerKing.cusines.join(",")}</h3>
        <h4>{burgerKing.rating} stars</h4>
       </div>
    );
};

const Body = () => {
    return(
       <div className='restaurant-list'>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
       </div>
    );
};

const Footer = () => {
    return(
        <>
        <h1>Footer</h1>
        </>
    );
};

const AppLayout = () =>{
    return(
        <>
        <Header/>
        <Body/>
        <Footer/> 
        </>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout/>);