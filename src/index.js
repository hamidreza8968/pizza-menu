import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div className="container">
            <Header/>
            <Menu/>
            <Footer/>
        </div>
    );
}

function Header() {
    return <header className="header">
        <h1>Fast React Pizza Co.</h1>
    </header>
}

function Menu() {
    const numPizzas = pizzaData.length;

    const pizzas = pizzaData.map((pizza , index) => {
        return <Pizza pizzaObj={pizza} key={index} />
    });
    // photoName={pizza.photoName} name={pizza.name} ingredients={pizza.ingredients} price={pizza.price} soldoutSit={pizza.soldOut}

    return (
        <div className="menu">
            <h2>Our menu</h2>
            {numPizzas > 0 ? (
                <>
                    <p>6 creative dishes to choose from. all from our stone oven, all organic, all delicious.</p>
                    <ul className="pizzas">{pizzas}</ul>
                </>
                ) : <p>We are still working on our menu. please come back later 😊</p>
            }
        </div>
    );
}

function Pizza({pizzaObj}) {
    return (
        <div className={!pizzaObj.soldOut ? "pizza" : "pizza sold-out"}>
            <img src={pizzaObj.photoName} alt="image of Pizza"/>
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{!pizzaObj.soldOut ? pizzaObj.price : "SOLD OUT"}</span>
            </div>
        </div>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22 ;
    return (
        <footer className="footer">
        {hour>=openHour && hour<=closeHour ? (
            <Order closeHour={closeHour} openHour={openHour}/>
        ) : <p>We are happy to welcome you between {openHour}:00 to {closeHour}:00.</p>}
    </footer>
    );
}

function Order({closeHour , openHour}) {
    return (
        <div className="order">
            <p>We are open from {openHour}:00 to {closeHour}:00. Come visit us or order online.</p>
            <button className="btn">Order</button>
        </div>
    );
}


const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(<React.StrictMode><App/></React.StrictMode>);