import React from "react";
import ReactDOM from "react-dom/client"; 

const Header = () => {
    return (
        <div className="header">
            <img id="logo"src ="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg" alt="log" />
           <div className ="nav">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </div>
        </div>
    )
};
const RestorentCard = () => {
return (
    <div className="restorent-card">
    <img className="res-logo"
    src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRETxQtMecTxrMgY5eFO9Rij1unZtEi8voL0Q&s"
    />
    <h5>Om Dhaba</h5>
    <h5>Rating 5/5</h5>
    <h5> Dal Chawal</h5>
    </div>
)
};
const Body = () => {
return (
    <div className="body">
        <div className="search">
        <input type="text" placeholder="Search for food" />
        <button>Search</button>
        </div>
        <div className ="res-container">
        <RestorentCard />
        <RestorentCard />
        <RestorentCard />
        <RestorentCard />
        <RestorentCard />
        </div>
        <h1>Food Delivery App</h1>
        <p>Order your favorite food online and get it delivered to your doorstep.</p>
        <button>Order Now</button>
    </div>
)
};
const Footer = ()=>{
    return (<div className="Footer"> This is a footer</div>)
};
const App = () => {
return (
    <div className="app">
        <Header />
        <Body />
        <Footer />
    </div>
)
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); // Render the React element to the DOM    