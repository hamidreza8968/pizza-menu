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
    const pizzas = pizzaData.map((pizza , index) => {
        return <Pizza key={index} photoName={pizza.photoName} name={pizza.name} ingredients={pizza.ingredients} price={pizza.price}/>
    });
    return (
        <div className="menu">
            <h2>Our menu</h2>
            <div className="pizzas">{pizzas}</div>
        </div>
    );
}

function Pizza(props) {
    return (
        <div className="pizza">
            <img src={props.photoName} alt="image of Pizza"/>
            <div>
                <h3>{props.name}</h3>
                <p>{props.ingredients}</p>
                <span>{props.price}$</span>
            </div>
        </div>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    return <footer className="footer">{new Date().toLocaleTimeString()}. We are currently {hour>=12 && hour<=22 ? "open" : "close"}</footer>
}


const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(<React.StrictMode><App/></React.StrictMode>);